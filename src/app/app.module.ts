import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DateWithLocalePipe } from './date-with-locale.pipe'

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    DateWithLocalePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
