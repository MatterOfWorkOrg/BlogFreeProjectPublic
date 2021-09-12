import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebuttal-card',
  templateUrl: './rebuttal-card.component.html',
  styleUrls: ['./rebuttal-card.component.scss']
})
export class RebuttalCardComponent implements OnInit {
  @Input() title?:string ='';
  @Input() config?:any ={};
  constructor() { }

  ngOnInit(): void {
    console.log(this.config);

  }
}





