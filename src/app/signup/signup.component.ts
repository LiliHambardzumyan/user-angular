import { Component } from '@angular/core';

import {IUser} from "../iuser";
import {Router} from "@angular/router";
import {count} from "rxjs";
@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showPassword = false;
  showConfirmedPassword = false;
  users: Array<Object> = [];
  signup_user: IUser  = {
    user_id: 0,
    user_name: '',
    user_mail: '',
    user_password: '',
  };
  constructor(private router:Router) {}

  toggleShow(){
    this.showPassword = !this.showPassword;
    console.log(this.showPassword)
  }
  toggleShowConfirmed(){
    this.showConfirmedPassword = !this.showConfirmedPassword
  }

  createUser(){
    let arr = localStorage.getItem('users');
    if(arr){
      this.users = JSON.parse(arr);
    }
    let user: any = this.users[this.users.length-1]
    let id = user.user_id
    this.signup_user.user_id = id + 1;
    this.users.push(this.signup_user)
    localStorage.setItem('users', JSON.stringify(this.users))
    setTimeout(() => {
      this.router.navigate(["/login"])
    }, 1000);
  }

}
