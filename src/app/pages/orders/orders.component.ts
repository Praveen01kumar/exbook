import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  ordersList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.callOninit();
  }

  callOninit() {
    const ordersItem = localStorage.getItem('cartItem');
    this.ordersList = ordersItem ? JSON.parse(ordersItem) : [];
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }

  
}
