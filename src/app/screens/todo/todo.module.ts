import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import {TodoComponentsModule} from "../../components/todo-components/todo-components.module";


@NgModule({
  declarations: [
    TodoComponent
  ],
   imports: [
      CommonModule,
      TodoRoutingModule,
      TodoComponentsModule
   ]
})
export class TodoModule { }
