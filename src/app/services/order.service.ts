import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderResponseType } from '../../types/order-response.type';
import { Observable } from 'rxjs';
import { OrderType } from 'src/types/order.type';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: OrderType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.site/order-tea', order);
  }
}
