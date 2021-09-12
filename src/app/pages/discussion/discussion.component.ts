import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor() { }
showDetailsPage=false;
  ngOnInit(): void {
    this.showDetailsPage=false;
  }
onClick() {
  this.showDetailsPage=true;
}
}
