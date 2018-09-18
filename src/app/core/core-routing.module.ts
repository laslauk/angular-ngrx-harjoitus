import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../core/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormTestComponent } from './form-test/form-test.component';


const coreRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  {path: 'form', component: FormTestComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]

})
export class CoreRoutingModule {

}
