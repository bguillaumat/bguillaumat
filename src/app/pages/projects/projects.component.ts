import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [];

  constructor() {
    this.projects.push({
      name: 'Epicture',
      year: '2018',
      content: 'Epicture is a non-official Imgur Application on Android',
      github: 'Epicture',
      languages: [{name: 'Java', css: 'java'}]
    });
    this.projects.push({
      name: 'Babel',
      year: '2018',
      content: 'Babel is a project who consists in a client/server architecture voice over IP application, similar to TeamSpeak',
      github: 'Babel',
      languages: [{name: 'C++', css: 'cpp'}]
    });
    this.projects.push({
      name: 'KytKat',
      year: '2018',
      content: 'KytKat is a Multiple Choice Answers',
      github: 'KytKat',
      languages: [{name: 'Java', css: 'java'}]
    });
    this.projects.push({
      name: 'Dashboard',
      year: '2018',
      content: 'A web app in NodeJs displaying widgets of services',
      github: 'Dashboard',
      languages: [{name: 'HTML', css: 'html'}, {name: 'JavaScript', css: 'javascript'}]
    });
  }

  ngOnInit() {
  }

}
