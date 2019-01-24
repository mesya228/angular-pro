import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list, query) {
    if (query) {
      return list.filter(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      });
    }
    return list;
  }

}
