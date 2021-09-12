import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() title!: string
  @Input() style!: any;
  minHeight!:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.style);
    this.minHeight = this.style?.minHeight;
    this.title = this.title ? `Happy! ${this.title}` : 'Happy!';
  }

}
