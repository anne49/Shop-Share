import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input('order') order;
  @Input('show-success') showSuccess = false;
  
  constructor() { }

  ngOnInit() {
  }

}
