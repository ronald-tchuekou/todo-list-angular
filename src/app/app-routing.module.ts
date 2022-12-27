import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoService} from "./services/todo.service";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./screens/todo/todo.module').then(m => m.TodoModule),
    canActivate: [TodoService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
