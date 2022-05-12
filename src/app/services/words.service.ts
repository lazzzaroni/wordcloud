import { Injectable } from '@angular/core';

import { IGameData } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor() {}

  getGameData(data: IGameData) {
    return {
      question: data.question,
      words: this.getAnswers(data),
    };
  }

  getAnswers(data: IGameData) {
    return data.all_words.map((el) => {
      return {
        word: el,
        checked: false,
        correct: data.good_words.includes(el),
        result: 0,
      };
    });
  }
}
