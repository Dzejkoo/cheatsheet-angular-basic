import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  display: boolean = true;
  arrayI: Array<number> = [];
  i: number = 0;

  onDisplay() {
    this.display = !this.display;
    this.i++;
    this.pushElement(new Date());
  }
  pushElement(element: any) {
    this.arrayI.push(element);
  }
}
