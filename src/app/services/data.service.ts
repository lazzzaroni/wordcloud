import { Injectable } from '@angular/core';

import data from '../../assets/data.json';
import { IGameData } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataBase: IGameData = data;

  constructor() {}
}
