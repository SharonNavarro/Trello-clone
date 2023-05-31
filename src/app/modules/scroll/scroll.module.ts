import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ScrollComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    SharedModule
  ]
})
export class ScrollModule { }
