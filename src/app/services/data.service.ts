import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { IGameData } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataBase!: IGameData[];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<IGameData[]>('assets/data.json').pipe(
      map((res: IGameData[]) => {
        this.dataBase = res;
        return res;
      })
    );
  }
}
