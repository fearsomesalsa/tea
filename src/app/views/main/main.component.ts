import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../../shared/components/popup/popup.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit, OnDestroy {
  private observablePopup: Observable<boolean>;
  private subscriptionPopup: Subscription | null = null;

  constructor(private modalService: NgbModal) {
    this.observablePopup = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 10000);
    });
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    this.subscriptionPopup = this.observablePopup.subscribe(
      (param: boolean) => {
        this.popupComponent.open();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionPopup?.unsubscribe();
  }
}
