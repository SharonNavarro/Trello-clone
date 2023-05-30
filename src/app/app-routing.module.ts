import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './modules/boards/pages/boards/boards.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { BoardComponent } from './modules/boards/pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'scroll',
    component: ScrollComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
