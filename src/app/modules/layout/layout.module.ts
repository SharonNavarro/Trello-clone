import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardFormComponent } from './components/board-form/board-form.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    BoardFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
