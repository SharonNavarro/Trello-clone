import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from "@boards/components/todo-dialog/todo-dialog.component";
import { ToDo } from '@models/todo.model';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '@services/boards.service';
import { Boards } from '@models/board.model';
import { Card } from '@models/card.model';
import { CardsService } from '@services/cards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent implements OnInit {

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  board: null | Boards = null;

  constructor(
    private dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private boardsService: BoardsService,
    private cardsService: CardsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(el => {
      const id = el.get('id');
      if (id) {
        this.getBoard(id);
      }
    })
  }

  getBoard(id: string) {
    this.boardsService.getBoard(id).subscribe({
      next: value => {
        this.board = value;
      }, error(err) {

      }, complete() {

      },
    })
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    const position = this.boardsService.getPosition(event.container.data, event.currentIndex)
    const card = event.container.data[event.currentIndex];
    const listId = event.container.id;
    this.updateCard(card, position, listId);
  }

  addColumn() {
    // this.columns.push({
    //   title: 'New Column',
    //   todos: []
    // });
  }

  openDialog(card: Card) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      data: {
        card: card,
      }
    });

    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

  private updateCard(card: Card, position: number, listId: string | number) {
    this.cardsService.update(card.id, {position, listId}).subscribe({
      next: cardUpdated => {
        console.log(cardUpdated)
      },
      error(err) {},
      complete() {},
    })
  }

}
