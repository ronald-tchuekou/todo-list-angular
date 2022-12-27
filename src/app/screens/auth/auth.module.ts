import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { PassForgotComponent } from './pass-forgot/pass-forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {AuthComponentsModule} from "../../components/auth-components/auth-components.module";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    PassForgotComponent,
    ResetPasswordComponent
  ],
   imports: [
      CommonModule,
      AuthRoutingModule,
      AuthComponentsModule
   ]
})
export class AuthModule { }
