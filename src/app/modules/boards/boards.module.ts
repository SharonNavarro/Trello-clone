import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    FontAwesomeModule,
    CdkAccordionModule
  ]
})
export class BoardsModule { }
