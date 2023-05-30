import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "./components/btn/btn.component";
import { TodoDialogComponent } from "./components/todo-dialog/todo-dialog.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    BtnComponent,
    TodoDialogComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OverlayModule
  ]
})
export class SharedModule { }
