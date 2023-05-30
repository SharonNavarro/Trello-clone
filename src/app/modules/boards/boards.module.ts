import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule
  ]
})
export class BoardsModule { }
