import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateWithLocale'
})
export class DateWithLocalePipe implements PipeTransform {
  constructor(){}
  transform(value: string, locale: string, pattern: string) {
    return new DatePipe(locale).transform(value, pattern);
  }

}
