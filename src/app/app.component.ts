import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = ['use'];
  accordion = false;

  closeAll() {
    this.selected = [];
  }

  onChange(event: Event) {
    this.accordion = (event.target as HTMLInputElement).checked;
  }

}
