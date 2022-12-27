import {Component, OnInit} from '@angular/core';
import ToDoModel from "../../../models/ToDo.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  list: ToDoModel[] = [];
  loading: boolean = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.todoService.getTodos()
      .subscribe((data) => {
        this.loading = false
        this.list = data
      })
  }

  addTodo() {
    return this.router.navigate(
      ['add'],
      {relativeTo: this.route}
    )
  }

  logOut() {
    localStorage.removeItem('todo_list_user_key')
    return this.router.navigate(['/login'])
  }
}
