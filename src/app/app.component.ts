import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data: any;
  constructor(private translate: TranslateService) {
    // translate.use('es').then(() => {
    //   console.log(translate.data);
    // });


  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
}
