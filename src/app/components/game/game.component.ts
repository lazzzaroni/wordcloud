import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import {
  IAnswers,
  IAnswersObject,
  IGameData,
} from 'src/app/interfaces/game.interface';
import { WordsService } from 'src/app/services/words.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'wordcloud-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  data!: IGameData[];
  getRandomNum!: number;
  answersObject!: IAnswersObject;
  isGameFinished = false;

  constructor(
    private dataService: DataService,
    private wordsService: WordsService,
    private playerService: PlayerService
  ) {}

  initGame() {
    this.getRandomNum = Math.floor(Math.random() * this.data.length); // set number of random object with info about question from data.json
    const data = this.data[this.getRandomNum]; // extract data for current session
    this.answersObject = this.wordsService.getGameData(data);
  }

  selectWord($event: any) {
    if (this.isGameFinished) {
      return;
    }

    const selectedWord = this.answersObject.words.find(
      (el) => el.word === $event.target.innerText
    );

    if (selectedWord) {
      const selectedWordIndex = this.answersObject.words.indexOf(selectedWord);
      let selectedWordChecked =
        this.answersObject.words[selectedWordIndex].checked;
      this.answersObject.words[selectedWordIndex].checked =
        !selectedWordChecked;
    }
  }

  checkAnswers(): void {
    this.answersObject.words = this.answersObject.words.map((item) => {
      return {
        ...item,
        result: this.calcResult(item),
      };
    });

    this.playerService.score = this.answersObject.words
      .map((el) => el.result)
      .reduce((acc, el) => acc + el, 0);

    this.isGameFinished = true;
  }

  calcResult(item: IAnswers): number {
    if (item.checked) {
      return item.correct ? 2 : -1;
    }
    return 0;
  }

  isItemChecked(): boolean {
    if (this.answersObject) {
      for (let index = 0; index < this.answersObject.words.length; index++) {
        if (this.answersObject.words[index].checked) {
          return true;
        }
      }
    }
    return false;
  }

  setAnswerClass(item: IAnswers) {
    return {
      selected: item.checked,
      correct: item.result == 2,
      incorrect: item.result == -1,
    };
  }

  ngOnInit(): void {
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
}
