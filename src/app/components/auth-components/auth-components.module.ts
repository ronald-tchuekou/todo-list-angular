import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { PassForgotFormComponent } from './pass-forgot-form/pass-forgot-form.component';
import { ResetPassFormComponent } from './reset-pass-form/reset-pass-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginFormComponent,
    PassForgotFormComponent,
    ResetPassFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent,
    PassForgotFormComponent,
    ResetPassFormComponent
  ]
})
export class AuthComponentsModule { }
