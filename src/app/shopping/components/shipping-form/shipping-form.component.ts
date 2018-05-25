import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Order } from '../../../shared/models/order';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {
    "name":"",
    "addressLine1":"",
    "addressLine2":"",
    "city":"",
  };// form result
  userId: string;
  userSubscription: Subscription;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {   
    this.userSubscription = this.authService.user$.subscribe(user=>this.userId=user.uid);
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart);
    //console.log(order);    
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);/**/
  }
}