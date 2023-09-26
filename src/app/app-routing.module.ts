import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/main/main.module').then((n) => n.MainModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./views/order/order.module').then((n) => n.OrderModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./views/products/products.module').then(
            (n) => n.ProductsModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
