import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  day = new Date().getDate();
  yo = 1998;

  constructor() {
  }

  ngOnInit() {
  }

}
