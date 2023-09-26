import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductType[] = [];
  private subscriptionProducts: Subscription | null = null;
  private subscriptionQueryParams: Subscription | null = null;
  searchString: string = '';
  title: string = '';
  loading: boolean = false;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptionQueryParams = this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.searchString = queryParams['search'] ? queryParams['search'] : '';
      this.title = this.searchString ? `Результаты поиска по запросу "${this.searchString}"` : 'Наши чайные коллекции';

      this.subscriptionProducts = this.productService.getProducts(this.searchString)
        .subscribe({
          next: (products) => {
            this.loading = false;
            if (Array.isArray(products)) {
              this.products = products;
              if (products.length === 0) {
                this.title = 'Ничего не найдено';
              }
            } else {
              this.products = Object.values(products);
            }
          },
          error: (error) => {
            this.loading = false;
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.subscriptionQueryParams?.unsubscribe();
    this.subscriptionProducts?.unsubscribe();
  }
}
