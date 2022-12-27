import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import * as moment from 'moment';
import ToDoModel from "../../../models/ToDo.model";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: []
})
export class TodoFormComponent implements OnInit {
  error: string = ''
  @Input()
  todo: ToDoModel = {
    action: '',
    dueDate: 0,
    done: false
  }
  @Input()
  title: string = 'Add new';
  @Output()
  onSubmit = new EventEmitter<{
    action: string,
    dueDate: number
  }>()

  formGroup = this.formBuilder.group({
    action: new FormControl(
      '',
      [Validators.required]
    ),
    dueDate: new FormControl(
      '',
      [Validators.required]
    ),
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.setValue({
      action: this.todo.action,
      dueDate: this.todo.dueDate === 0 ? '' : moment(this.todo.dueDate)
        .format('YYYY-MM-DD HH:mm')
        .split(' ')
        .join('T')
    })
  }

  submit() {
    if (!this.formGroup.valid) {
      this.error = "Veuillez renseigner l'action à faire !"
      return;
    }

    this.error = ''
    const data = {
      action: this.formGroup.value.action,
      dueDate: moment(this.formGroup.value.dueDate).toDate().getTime()
    }

    this.onSubmit.emit({
      action: data.action || '',
      dueDate: new Date(data.dueDate || '').getTime()
    })

    // Reset the form.
    this.formGroup.setValue({action: '', dueDate: ''})
  }

}
