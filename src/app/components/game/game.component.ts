import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IGameData } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'wordcloud-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  data!: IGameData[];
  getRandomNum!: number;
  gameData!: IGameData;
  allWords!: string[];
  goodWords!: string[];

  constructor(private dataService: DataService) {
    if (!this.dataService.dataBase) {
      this.dataService.getData().subscribe((res) => {
        this.data = res;
        this.initGame();
      });
    } else {
      this.data = this.dataService.dataBase;
      this.initGame();
    }
  }

  initGame() {
    this.getRandomNum = Math.floor(Math.random() * this.data.length); // set number of random object with info about question from data.json
    this.gameData = this.data[this.getRandomNum]; // extract data for current session
    this.allWords = this.gameData.all_words;
    this.goodWords = this.gameData.good_words;
  }

  ngOnInit(): void {}
}
