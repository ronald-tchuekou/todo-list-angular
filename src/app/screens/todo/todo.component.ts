import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    console.log('Current user :', this.authService.user)
  }

}
