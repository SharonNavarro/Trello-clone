import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BoardsRoutingModule } from './boards-routing.module';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    TodoDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    FontAwesomeModule,
    CdkAccordionModule,
    BoardsRoutingModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class BoardsModule { }
