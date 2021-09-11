import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() title!: string
  constructor() { }

  ngOnInit(): void {
    this.title = this.title ? `Happy! ${this.title}` : 'Happy!';
  }

}
