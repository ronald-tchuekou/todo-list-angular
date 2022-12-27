import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import UserModel from "../models/User.model";
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  private url: string = 'http://localhost:2403/users'
  user: UserModel = {
    username: '',
    password: ''
  }

  constructor(private httpClient: HttpClient) { }

  canActivate() {
    const user = JSON.parse(localStorage.getItem('todo_list_user_key') || '{}')
    return user.username === 'admin';
  }

  login (username: string, password: string) {
    const url = `${this.url}?username=${username}&password=${password}`
    return this.httpClient.get<UserModel[]>(url)
  }
}
