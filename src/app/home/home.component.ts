import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  loggedUser: any = {};
  constructor(private router:Router) {
    this.loggedUser = JSON.parse(<string>localStorage.getItem("logged"))
    if(!this.loggedUser){
      this.router.navigate(["/login"])
    }
  }
  ngOnInit(){
  }

  logOut(){
    localStorage.removeItem('logged')
    this.router.navigate(['/login'])
  }
}
