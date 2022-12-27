import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodoFormAddComponent } from './todo-form-add/todo-form-add.component';
import { TodoFormEditComponent } from './todo-form-edit/todo-form-edit.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    TodoFormAddComponent,
    TodoFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent,
    TodoFormAddComponent,
    TodoFormEditComponent
  ]
})
export class TodoComponentsModule { }
