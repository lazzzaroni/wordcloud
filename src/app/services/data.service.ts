import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataBase: any = data;
}
