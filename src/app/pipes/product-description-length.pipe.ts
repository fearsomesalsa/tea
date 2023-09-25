import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDescriptionLength'
})
export class ProductDescriptionLengthPipe implements PipeTransform {

  transform(description: string, maxLength: number = 95): string {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  }

}
