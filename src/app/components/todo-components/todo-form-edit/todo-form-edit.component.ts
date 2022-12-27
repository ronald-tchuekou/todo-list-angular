import {Component, OnDestroy, OnInit} from '@angular/core';
import ToDoModel from "../../../models/ToDo.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo-form-edit',
  templateUrl: './todo-form-edit.component.html',
  styles: []
})
export class TodoFormEditComponent implements OnInit, OnDestroy {
  todo: ToDoModel = {
    action: '',
    done: false,
    dueDate: 0
  };
  routeParamsSubscription: Subscription = new Subscription()
  loading: boolean = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route
      .params
      .subscribe((params) => {
        const todo_id = params['id'] || ''
        this.loading = true
        this.todoService.getTodo(todo_id).subscribe({
          next: (data) => {
            this.loading = false
            this.todo = data
          },
          error: (err) => {
            this.loading = false
            console.log('Error where get todo by id: ', err)
          }
        })
      })
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }

  submit(todo: any) {
    const data: ToDoModel = {
      action: todo.action,
      dueDate: todo.dueDate,
      done: false
    }

    this.loading = true
    this.todoService.updateTodo(this.todo.id || '', data)
      .subscribe({
        next: (data) => {
          this.loading = false
          console.log('Edited todo :', data)
          this.todoService.getTodos()
          return this.router.navigate(['/todo'])
        },
        error: (err) => {
          this.loading = false
          console.log(err)
        }
      })
  }
}
