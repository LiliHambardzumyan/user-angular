import { Component } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword = false;
  remember = false;
  login_user = {
    user_name: '',
    user_password: '',
    user_token: '',
  };
  constructor(private router:Router) {}

  toggleShow() {
    this.showPassword = !this.showPassword
  }
  rememberUser() {
    this.remember = !this.remember
  }
  loginUser() {
    //local get users if users.users_name = login_user.user_name && users.users_password = login_user.user_password {this.router.navigate(["/home"])}
    let logged_user = {
      user_name: this.login_user.user_name,
      user_token: '',

    }
    this.router.navigate([''])
    if (this.remember) {
      logged_user.user_token = String(Math.random())
      localStorage.setItem('logged', JSON.stringify(logged_user))
    } else {
      localStorage.setItem('logged', JSON.stringify(logged_user))
    }
  }
}
