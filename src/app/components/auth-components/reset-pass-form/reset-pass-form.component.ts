import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-pass-form',
  templateUrl: './reset-pass-form.component.html',
  styles: [
  ]
})
export class ResetPassFormComponent implements OnInit {
  errors: string[] = []

  formGroup = this.formBuilder.group({
    new_password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required])
  })

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.formGroup.valid) {
      this.errors = ["Veuillez renseigner tous les champs du formulaire !"]
      return;
    }

    this.errors = []
    const data = this.formGroup.value

    console.log('Reset password form data : ', data)

    // TODO Implement this to log user to app.

    return this.router.navigate(['todo'])
  }
}
