import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit, OnDestroy {
  product: ProductType;
  private subscriptionProducts: Subscription | null = null;
  private subscriptionParams: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.subscriptionProducts = this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.subscriptionParams = this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
              const product = (products as ProductType[]).find((product: ProductType) => product.id === +params['id']);
              if (product) {
                this.product = product;
              } else {
              this.router.navigate(['/']);
            }
          }
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptionProducts?.unsubscribe();
    this.subscriptionParams?.unsubscribe();
  }

  addToCart() {
    this.router.navigate(['/order'], {queryParams: {product: this.product.title}});
  }
}
