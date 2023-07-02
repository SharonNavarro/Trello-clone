import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "./components/btn/btn.component";
import { TodoDialogComponent } from "./components/todo-dialog/todo-dialog.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';
import { CardColorComponent } from './components/card-color/card-color.component';

@NgModule({
  declarations: [
    BtnComponent,
    TodoDialogComponent,
    NavbarComponent,
    CardColorComponent
  ],
  exports: [
    NavbarComponent,
    TodoDialogComponent,
    BtnComponent,
    CardColorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OverlayModule
  ]
})
export class SharedModule { }
