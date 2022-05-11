import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wordcloud-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor() {}

  name: string = '';
  score: number = 0;

  ngOnInit(): void {}
}
