export interface IGameData {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface IAnswersObject {
  question: string;
  words: IAnswers[];
}

export interface IAnswers {
  word: string;
  checked: boolean;
  correct: boolean;
  result: number;
}
