import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrollComponent } from './pages/scroll/scroll.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollRoutingModule { }
