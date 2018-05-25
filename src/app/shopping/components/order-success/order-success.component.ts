import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
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
