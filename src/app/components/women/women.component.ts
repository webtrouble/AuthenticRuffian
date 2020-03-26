import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  menu: any = [];

  constructor() {
    this.menu = ['Sudaderas', 'Playeras', 'Gorras'];
   }

  ngOnInit() {
  }

}
