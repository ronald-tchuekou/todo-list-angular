import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo.component';
import {TodoFormEditComponent} from "../../components/todo-components/todo-form-edit/todo-form-edit.component";
import {TodoFormAddComponent} from "../../components/todo-components/todo-form-add/todo-form-add.component";
import {AuthService} from "../../services/auth.service";

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {path: 'edit/:id', component: TodoFormEditComponent, canActivate: [AuthService]},
      {path: 'add', component: TodoFormAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
