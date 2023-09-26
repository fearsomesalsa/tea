import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { PopupComponent } from '../../common/popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit {

  constructor(private modalService: NgbModal) { }

  @ViewChild(PopupComponent) 
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.popupComponent.open();
    }, 10000);
  }
}
