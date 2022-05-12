import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'wordcloud-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  name!: string;
  score!: number;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.name = this.playerService.name;
    this.score = this.playerService.score;

    if (this.score < 0) {
      this.score = 0;
    }
  }
}
