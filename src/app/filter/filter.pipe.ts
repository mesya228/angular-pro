import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilterPipe implements PipeTransform {

  transform(list, query) {
    if (list) {
      return list.filter(item => {
        if (list.title.toLowerCase().includes(query.toLowerCase())) {
          return list;
        }
      });
    }
  }

}
