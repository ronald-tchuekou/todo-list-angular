import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: []
})
export class LoginFormComponent implements OnInit {
  errors: string[] = []
  loading: boolean = false
  formGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  handlePassForgot(){
    return this.router.navigate(['password-forgot'])
  }

  submit() {
    if (!this.formGroup.valid) {
      this.errors = ["Veuillez renseigner tous les champs du formulaire !"]
      return;
    }

    this.errors = []
    const data = this.formGroup.value

    this.loading = true

    this.authService.login(data.username || '', data.password || '')
    .subscribe({
      next: (data) => {
        this.loading = false

        if(data.length === 0){
          this.errors = ["Vérifier votre  !"]
          return;
        }

        localStorage.setItem('todo_list_user_key', JSON.stringify(data[0]))
        this.authService.user = data[0]

        return this.router.navigate(['todo'])
      },
      error: (err) => {
        this.loading = false
        console.log(err)
        this.errors = ["Vérifier votre  !"]
      }
    })
  }
}
