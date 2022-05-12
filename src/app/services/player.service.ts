import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  name: string = 'Mystery Guest';
  score: number = 666;

  constructor() {}
}
