import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PopupComponent } from './components/popup/popup.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProductDescriptionLengthPipe } from './pipes/product-description-length.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductCardComponent,
    PopupComponent,
    ProductDescriptionLengthPipe
  ],
  imports: [
    CommonModule,
    AccordionComponent,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    PopupComponent,
    AccordionComponent,
    ProductDescriptionLengthPipe
  ]
})
export class SharedModule { }
