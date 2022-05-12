import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'wordcloud-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor(private playerService: PlayerService, private router: Router) {}

  name: string = '';

  onClickPlay() {
    this.playerService.name = this.name;
    this.router.navigate(['/game']);
  }

  ngOnInit(): void {}
}
