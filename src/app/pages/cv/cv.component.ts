import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  languages = [];
  skills = [];
  frameworks = [];
  others = [];
  experience = [];
  education = [];

  constructor() {
    this.languages.push({name: 'C', percentage: 85});
    this.languages.push({name: 'C++', percentage: 85});
    this.languages.push({name: 'TypeScript', percentage: 90});
    this.languages.push({name: 'JavaScript', percentage: 85});
    this.languages.push({name: 'Java', percentage: 80});
    this.languages.push({name: 'PHP', percentage: 70});

    this.frameworks.push({name: 'NodeJS', percentage: 80});
    this.frameworks.push({name: 'Angular', percentage: 80});
    this.frameworks.push({name: 'Vue', percentage: 80});
    this.frameworks.push({name: 'Ionic', percentage: 70});

    this.others.push({name: 'English', percentage: 70, details: 'TOEFL IBT 74'});
    this.others.push({name: 'Linux (Ubuntu & Debian)', percentage: 85});
    this.others.push({name: 'GIT', percentage: 90});
    this.others.push({name: 'Firebase', percentage: 70});
    this.others.push({name: 'Apache', percentage: 60});
    this.others.push({name: 'Drupal', percentage: 60});
    this.others.push({name: 'OpenEmbedded', percentage: 60});
    this.others.push({name: 'MySQL', percentage: 75});

    this.skills.push({name: 'Project Management', percentage: 85});
    this.skills.push({name: 'Backend Dev', percentage: 85});
    this.skills.push({name: 'Frontend Dev', percentage: 70});

    this.experience.push({
      company: 'KIPLINK',
      time: 'February 2020 - (Now)',
      job: 'Lead Software Engineer',
      techs: 'C++ / Vue / MySQL / OpenEmbedded',
      pos: 'l'
    });
    this.experience.push({
      company: 'Carbon4Finance',
      time: 'October 2018 - June 2019',
      job: 'Fullstack Developer',
      techs: 'Angular / Drupal',
      pos: 'r'
    });
    this.experience.push({
      company: 'DigiFactory',
      time: 'July 2017 - December 2017',
      job: 'Fullstack Developer',
      techs: 'PHP / HTML / CSS',
      pos: 'l'
    });

    this.education.push({
      diploma: 'Master\'s degree in IT',
      time: '2016 - Present (to 2021)',
      place: 'EPITECH Paris',
      pos: 'r'
    });
    this.education.push({
      diploma: 'Study Abroad at RMIT',
      time: 'July 2019 - June 2020',
      place: 'Royal Melbourne Institute of Technology, Australia',
      pos: 'l'
    });
    this.education.push({
      diploma: 'Bachelor\'s degree in IT',
      time: '2016 - 2019',
      place: 'EPITECH Paris',
      pos: 'r'
    });
    this.education.push({
      diploma: 'A-Level with specialization in Sciences',
      time: '2016',
      place: 'Lycée Hoche, Versailles',
      pos: 'l'
    });
  }

  ngOnInit() {
  }

}
