import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   arr = [];
  transform(value: [], ...args: any[]): any {
    if(value > args[0]){
      return value
    }
  }
}
