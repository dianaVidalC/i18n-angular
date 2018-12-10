import { Component } from '@angular/core';
import localeHe from '@angular/common/locales/he';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  today:any;
  lang = "es";
  // he = localeHe
  constructor() {
    this.today = new Date();
    // console.log(this.he);
    
  }

  english() {
    this.lang = 'en'
  }
  spanish() {
    this.lang = 'es'
  }
}
