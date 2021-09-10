import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogFreeProject';
  editBody = false

  aboutMeActive = false
  particularsActive = false
  extrasActive = false

  constructor() { }

  doEditBody(){
    this.editBody = !this.editBody
  }

}
