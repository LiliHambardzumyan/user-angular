import { Component } from '@angular/core';

@Component({
  selector: 'user-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {
  showPassword = false;
  showConfirmedPassword = false;
  constructor() {}

  toggleShow(){
    this.showPassword = !this.showPassword;
  }
  toggleShowConfirmed(){
    this.showConfirmedPassword = !this.showConfirmedPassword
  }
}
