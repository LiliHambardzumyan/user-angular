import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgetComponent} from "./forget/forget.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: ''
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: SignupComponent,
    title: 'Registration'
  },
  {
    path: 'recover-password',
    component: ForgetComponent,
    title: 'Recover Password'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
