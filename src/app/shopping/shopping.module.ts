import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'shopping/components/products/products.component';
import { ShoppingCartComponent } from 'shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'shopping/components/check-out/check-out.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { OrderSuccessComponent } from 'shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from 'shopping/components/my-orders/my-orders.component';
import { ProductFilterComponent } from 'shopping/components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from 'shared/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from 'shopping/components/shipping-form/shipping-form.component';
import { MyOrderFormComponent } from './components/my-order-form/my-order-form.component';
import { ProductSearchComponent } from './components/products/product-search/product-search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path:'products', component: ProductsComponent },
      { path:'shopping-cart', component: ShoppingCartComponent },
      { path:'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path:'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path:'my/orders/:id', component: MyOrderFormComponent, canActivate: [AuthGuard] },
      { path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,    
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    MyOrderFormComponent,
    ProductSearchComponent
  ]
})
export class ShoppingModule { }
