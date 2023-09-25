import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

declare var $: any;
@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  styleUrls: [],
})
export class MainComponent implements OnInit, OnDestroy {
  private observablePopup: Observable<boolean>;
  private subscriptionPopup: Subscription | null = null;
  popupIsShown: boolean = false;
  panels: string[] = [
    'Собираете ли вы подарочные боксы?',
    'Сколько у вас разновидностей чая?',
    'В какой срок осуществляется доставка?',
    'У вас обновляется ассортимент?',
    'Какого объема у вас пачки чая?',
  ];

  constructor() {
    this.observablePopup = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 10000);
    });
  }

  closePopup() {
    this.popupIsShown = false;
  }

  ngOnInit() {
    $('#accordion').accordion({
      collapsible: true,
    });

    this.subscriptionPopup = this.observablePopup.subscribe(
      (param: boolean) => {
        this.popupIsShown = true;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionPopup?.unsubscribe();
  }
}
