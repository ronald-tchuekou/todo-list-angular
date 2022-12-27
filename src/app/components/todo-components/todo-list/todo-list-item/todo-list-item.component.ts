import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import ToDoModel from "../../../../models/ToDo.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../../../services/todo.service";
import * as moment from "moment";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styles: []
})
export class TodoListItemComponent implements OnInit, OnChanges {
  @Input()
  item: ToDoModel = {
    id: 'todoId',
    action: 'Playing games with my friends !',
    done: false,
    dueDate: 0
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['item']
    if (change)
      this.item = change.currentValue
  }

  editTodo() {
    return this.router.navigate(
      ['edit', this.item.id],
      {relativeTo: this.route}
    )
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.item.id || '')
      .subscribe({
        next: () => {
          this.todoService.getTodos()
        },
        error: (err) => {
          console.log('Error where deleted todo :', err)
        }
      })
  }

  getStatus() {
    if (this.item.done)
      return '✅'

    if (moment().isBefore(moment(this.item.dueDate)))
      return '🕑'

    return '🚫'
  }

  markAsDone() {
    this.todoService.updateTodo(this.item.id || '', {
      ...this.item,
      done: !this.item.done
    })
      .subscribe({
        next: () => {
          this.todoService.getTodos()
        },
        error: (err) => {
          console.log('Error where deleted todo :', err)
        }
      })
  }
}
