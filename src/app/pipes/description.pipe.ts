import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      value = value.substring(0, 95) + '...';
    }

    return value;
  }

}
