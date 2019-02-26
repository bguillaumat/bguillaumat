import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  languages = [];
  frameworks = [];
  others = [];

  constructor() {
    this.languages.push({name: 'C', percentage: 80});
    this.languages.push({name: 'C++', percentage: 70});
    this.languages.push({name: 'TypeScript', percentage: 90});
    this.languages.push({name: 'JavaScript', percentage: 85});
    this.languages.push({name: 'Java (Android)', percentage: 70});
    this.languages.push({name: 'PHP', percentage: 65});

    this.frameworks.push({name: 'AngularJS', percentage: 80});
    this.frameworks.push({name: 'Ionic', percentage: 70});

    this.others.push({name: 'English', percentage: 70, details: 'TOEFL IBT 74'});
    this.others.push({name: 'Linux (Ubuntu & Debian)', percentage: 85});
    this.others.push({name: 'GIT', percentage: 90});
    this.others.push({name: 'Firebase', percentage: 70});
    this.others.push({name: 'Apache', percentage: 60});
  }

  ngOnInit() {
  }

}
