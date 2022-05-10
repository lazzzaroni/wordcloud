import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'wordcloud-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  name: string = '';

  onClickPlay() {
    this.playerService.name = this.name;
  }

  ngOnInit(): void {}
}
