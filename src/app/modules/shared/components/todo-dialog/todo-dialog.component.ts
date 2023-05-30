import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {faBars, faUser, faTag, faCheckSquare, faClock, faDoorClosed, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';
interface InputData {
  todo: ToDo;
}
interface OutputData {
  rta: boolean;
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  faClose = faDoorClosed;
  faCheckToSlot = faCheckCircle;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }

}
