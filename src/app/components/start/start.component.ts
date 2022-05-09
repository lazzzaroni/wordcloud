import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'wordcloud-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  name = '';

  constructor(private dataService: DataService) {}

  onClickPlay() {
    console.log(this.name);
    this.dataService.userName = this.name;
  }

  ngOnInit(): void {}
}
