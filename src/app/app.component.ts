import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'BGuillaumat';

  opened = true;
  isMobile = false;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile = event.target.innerWidth <= 900;
    this.opened = !this.isMobile;
  }

  constructor() {
    this.isMobile = (window.innerWidth < 900);
    this.opened = !this.isMobile;
  }
}
