import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, columnKey: string): any[] | null {
    if (!Array.isArray(value) || !columnKey) {
      return value;
    }

    return value.sort(function (a: any, b: any): any {
      if (typeof a[columnKey] === 'number' && typeof b[columnKey] === 'number') {
        return a[columnKey] - b[columnKey];
      } else {
        return ('' + a[columnKey]).toLowerCase().localeCompare(('' + b[columnKey]).toLowerCase());

      }
    }

    )

  }
}