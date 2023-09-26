import { Injectable } from '@angular/core';
import { ProductType } from '../../types/product.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(queryParams: string = ''): Observable<ProductType[] | Record<string, ProductType>> {
    return this.http.get<ProductType[] | Record<string, ProductType>>('https://testologia.site/tea' + (queryParams ? ('?search=' + queryParams) : ''));
  }
}
