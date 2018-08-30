import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormTestComponent } from './form-test/form-test.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  HomeComponent,
  HeaderComponent,
  LandingComponent,
  SignUpComponent,
  LoginComponent,
  FormTestComponent
],

  imports: [
    BrowserModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class CoreModule { }
