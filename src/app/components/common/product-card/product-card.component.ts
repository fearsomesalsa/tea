import { Component, Input } from '@angular/core';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'product-card-component',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent {
  @Input() product: ProductType;

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }
}
