import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detail'
})
export class DetailPipe implements PipeTransform {
  transform(names: any[],idName: string): any[] {
    if(!names) return [];
    if(!idName) return names;
    idName = idName.toLowerCase();
    return names.filter( it => {
      return it.name.toLowerCase().includes(idName);
    });
  }
}
