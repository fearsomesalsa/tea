import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, SharedModule, RouterModule, ProductsRoutingModule],
  providers: [ProductService],
  exports: [ProductsRoutingModule],
})
export class ProductsModule {}
