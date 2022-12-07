import { Component } from '@angular/core';

@Component({
  selector: 'app-checkUser',
  templateUrl: './checkUser.component.html',
  styleUrls: ['./checkUser.component.scss'],
})
export class CheckUserComponent {
  userId = 10;
  userStatus = 'offline';

  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.userStatus === 'online' ? 'green' : 'red';
  }
}
