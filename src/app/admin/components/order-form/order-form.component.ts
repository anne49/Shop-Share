import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Order } from 'shared/models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  id;
  order={};
  items: any[]=[];
  //shipping={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.orderService.getOrder(this.id).take(1).subscribe(order => {
      this.order = order; 
      console.log(order);  
      /**/
      this.items = order.items;
      //this.shipping = order.shipping;        
      //console.log(this.shipping);
      //console.log(this.items); 
      this.totalItemsCount();
      this.totalOrderPrice();
      //console.log(this.order);
    });
  }

  ngOnInit() {}
/**/
  private totalItemsCount(){
    let count = 0;
    for (let productId in this.items)
        count += this.items[productId].quantity;
    //return count;
    this.order["totalItemsCount"] = count;
  }

  private totalOrderPrice(){
    let sum = 0;
    for (let productId in this.items)
        sum += this.items[productId].totalPrice;
    //return sum;
    this.order["totalOrderPrice"] = sum;
  }

}
