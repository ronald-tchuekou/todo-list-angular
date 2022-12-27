import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pass-forgot-form',
  templateUrl: './pass-forgot-form.component.html',
  styles: [
  ]
})
export class PassForgotFormComponent implements OnInit {
  errors: string[] = []

  formGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  handlePassRemember(){
    return this.router.navigate(['login'])
  }

  submit() {
    if (!this.formGroup.valid) {
      this.errors = ["Veuillez renseigner tous les champs du formulaire !"]
      return;
    }

    this.errors = []
    const data = this.formGroup.value

    console.log('Pass forgot form data : ', data)

    return this.router.navigate(['reset-password'])

    // TODO Implement this to log user to app.
  }
}
