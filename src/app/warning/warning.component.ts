import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent {
  warningName = 'Warning!! Take care about your scss';
  warningStatus = true;

  constructor() {
    this.warningStatus = Math.random() > 0.5 ? true : false;
  }

  getColor() {
    return this.warningStatus === true ? 'orange' : 'yellow';
  }
}
