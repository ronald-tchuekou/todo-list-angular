import {Injectable} from '@angular/core';
import ToDoModel from "../models/ToDo.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements CanActivate {

  private url: string = "http://localhost:2403/todos"
  tTodos: Subject<ToDoModel[]> = new Subject<ToDoModel[]>()
  tTodos$: Observable<ToDoModel[]> = this.tTodos.asObservable()

  constructor(private httpClient: HttpClient, private route: Router) {
  }

  canActivate() {
    const user = JSON.parse(localStorage.getItem('todo_list_user_key') || 'null')
    if (!user)
      this.route.navigate(['/login'])
    return user !== null;
  }

  getTodos() {
    this.httpClient.get<ToDoModel[]>(this.url).subscribe({
      next: (data) => {
        this.tTodos.next(data.reverse())
      },
      error: (err) => {
        console.log('Where get todos : ', err)
      }
    })
    return this.tTodos$
  }

  getTodo(id: string) {
    return this.httpClient.get<ToDoModel>(`${this.url}/${id}`)
  }

  saveTodo(todo: ToDoModel) {
    return this.httpClient.post<ToDoModel>(this.url, todo)
  }

  updateTodo(id: string, todo: ToDoModel) {
    return this.httpClient.put<ToDoModel>(`${this.url}/${id}`, todo)
  }

  deleteTodo(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
