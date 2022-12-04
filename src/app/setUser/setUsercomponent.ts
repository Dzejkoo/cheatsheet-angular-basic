import { Component } from '@angular/core';

@Component({
  selector: 'app-setUser',
  templateUrl: './setUser.component.html',
  styleUrls: ['./setUser.component.scss'],
})
export class setUserComponent {
  userName_1 = '';
  userName_2 = '';
  disableButton = true;

  setUserName(event: any) {
    this.userName_1 = event.target.value;
  }

  setDisableButton() {
    if (this.userName_2.length > 0) {
      return !this.disableButton;
    }
    return this.disableButton;
  }

  resetValue() {
    this.userName_2 = '';
  }
}
