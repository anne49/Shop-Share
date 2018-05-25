import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartSummaryComponent } from 'shared/components/shopping-cart-summary/shopping-cart-summary.component';
import { OrderCardComponent } from 'shared/components/order-card/order-card.component';
import { BlogService } from 'shared/services/blog.service';
import { RouterModule } from '@angular/router';
import { HoverContainerComponent } from 'shared/components/hover-container/hover-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    OrderCardComponent,
    HoverContainerComponent
  ],
  exports: [
    CommonModule,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    OrderCardComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    HoverContainerComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,    
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    BlogService
  ]
})
export class SharedModule { }
