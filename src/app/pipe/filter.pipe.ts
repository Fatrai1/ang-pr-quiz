import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[]|null, key:string, phrase:string): any[]|null {
    if(!Array.isArray(value) || !key || !phrase){
      return value;
    }
    phrase=phrase.toLowerCase();
    return value.filter(item=>item[key].toString().toLowerCase().includes(phrase));
  }

}
