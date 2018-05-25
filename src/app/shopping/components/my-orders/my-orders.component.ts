import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  userId;
  orders$;
 

  constructor(private auth: AuthService, private orderService: OrderService) { 
    this.auth.user$.map(user=>this.userId = user.uid);
    this.orders$ = this.orderService.getOrdersByUser(this.userId);
  }

  ngOnInit() {
  }

}
