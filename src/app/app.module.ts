import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDescriptionLengthPipe } from './pipes/product-description-length.pipe';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './components/common/popup/popup.component';
import { AccordionComponent } from './components/common/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductDescriptionLengthPipe,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AccordionComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
