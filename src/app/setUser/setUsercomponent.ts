import { Component } from '@angular/core';

@Component({
  selector: 'app-setUser',
  templateUrl: './setUser.component.html',
  styleUrls: ['./setUser.component.scss'],
})
export class SetUserComponent {
  allowNewUser = false;
  userCreationStatus = 'No user was created!';
  userName = 'Testname';
  serverCreated = false;
  users = ['Testserver_1', 'Testserver_2'];

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  onCreateUser() {
    this.serverCreated = true;
    this.users.push(this.userName);
    this.userCreationStatus = 'User was created! Name is ' + this.userName;
  }
}
