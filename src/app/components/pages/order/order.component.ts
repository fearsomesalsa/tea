import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, tap } from 'rxjs';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { OrderService } from 'src/app/services/order.service';
import { OrderType } from 'src/app/types/order.type';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  orderForm = this.fb.group({
    product: [{value: '', disabled: true}, Validators.required],
    name: ['', [Validators.required, Validators.pattern('[а-яА-Я]+')]],
    last_name: ['', [Validators.required, Validators.pattern('[а-яА-Я]+')]],
    phone: ['', [Validators.required, Validators.pattern('^[\+]?[0-9]{11}$')]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    address: ['', [Validators.required, Validators.pattern('^[0-9а-яА-Я\-\/ ]+$')]],
    comment: ['']
  });

  orderTitle: string = 'Сделать заказ';

  formIsShown: boolean = true;
  orderError: boolean = false;

  btnIsDisabled: boolean = false;
  subscriptionQueryParams: Subscription | null = null;
  subscriptionOrder: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private fb: NonNullableFormBuilder,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.subscriptionQueryParams = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product']
        });
      }
    })
  }

  createOrder(orderForm: FormGroup) {
    if (orderForm.valid) {
      this.btnIsDisabled = true;
      this.subscriptionOrder = this.orderService.createOrder(this.orderForm.getRawValue())
        .subscribe(
          {
            next: (response) => {
              this.btnIsDisabled = false;
              if (response.success) {
                this.orderForm.reset();
                this.orderTitle = 'Спасибо за заказ!'
                this.formIsShown = false;
              } else {
                this.showError();
              }
            },
            error: (error) => {
              this.btnIsDisabled = false;
              this.orderError = true;
            }
          })
    } else {
      this.orderError = true;
    }
  }

  showError() {
   this.orderError = true;
   setTimeout(() => {
    this.orderError = false;
   }, 3000);
  }

  ngOnDestroy(): void {
    this.subscriptionOrder?.unsubscribe();
    this.subscriptionQueryParams?.unsubscribe();
  }

}
