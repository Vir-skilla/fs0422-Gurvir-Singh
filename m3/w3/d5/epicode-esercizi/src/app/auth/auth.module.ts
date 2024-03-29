import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login.page';
import { RegistrationPage } from './registration.page';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    LoginPage,
    RegistrationPage,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ]
})
export class AuthModule { }
