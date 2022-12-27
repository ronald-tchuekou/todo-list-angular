import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../services/todo.service";
import ToDoModel from "../../../models/ToDo.model";

@Component({
  selector: 'app-todo-form-add',
  templateUrl: './todo-form-add.component.html',
  styles: []
})
export class TodoFormAddComponent implements OnInit {

  loading: boolean = false

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  submit(todo: any) {
    const data: ToDoModel = {
      action: todo.action,
      done: false,
      dueDate: todo.dueDate
    }

    this.loading = true
    this.todoService.saveTodo(data).subscribe({
      next: (data) => {
        this.loading = false
        console.log('Added todo :', data)
        this.todoService.getTodos()
      },
      error: (err) => {
        this.loading = false
        console.log(err)
      }
    })
  }
}
