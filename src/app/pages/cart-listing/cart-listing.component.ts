import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { pageRoute } from 'src/app/shared/constant/route.const';
import { SharedService } from 'src/app/shared/services/shared-service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.scss'],
  providers: [MessageService]
}) 
export class CartListingComponent implements OnInit {
  pageRoute: any = pageRoute;
  constructor(
    private messageService: MessageService,
    public shardService: SharedService,
    public route: Router
  ) { }
  cartList: any[] = [];
  numberOfItem: number = 0;
  totalItemPrice: number = 0;
  totalDiscount: number = 0;
  totalPayablePrice: number = 0;
  deliveryFee: number = 0;
  will_save: number = 0;

  ngOnInit(): void {
    this.callOninit();
  }

  callOninit() {
    const cartItem = localStorage.getItem('cartItem');
    this.cartList = cartItem ? JSON.parse(cartItem) : [];
    this.calcTotal();
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }

  quantity(type: string, item: any) {
    const cartItem = localStorage.getItem('cartItem');
    this.cartList = cartItem ? JSON.parse(cartItem) : [];
    if (item) {
      const index = this.cartList.findIndex((el: any) => el?.id == item?.id);
      if (index >= 0) {
        if (type === '-' && item.quantity > 1) {
          this.cartList[index].quantity = item.quantity - 1;
        }
        if (type === '+' && item.quantity <= item.stock_quantity) {
          if (item.quantity >= item.stock_quantity) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `insufficient item in cart!` });
          } else {
            this.cartList[index].quantity = item.quantity + 1;
          }
        }
        localStorage.setItem('cartItem', JSON.stringify(this.cartList));
        this.shardService.cartItem$.next(this.cartList);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `Item not found in cart!` });
      }
    }
    this.calcTotal();
  }

  removeFromCart(item: any) {
    const cartItem = localStorage.getItem('cartItem');
    this.cartList = cartItem ? JSON.parse(cartItem) : [];
    if (item) {
      const index = this.cartList.findIndex((el: any) => el?.id == item?.id);
      if (index >= 0) {
        this.cartList.splice(index, 1);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${item?.name} has been deleted successfully!` });
        localStorage.setItem('cartItem', JSON.stringify(this.cartList));
        this.shardService.cartItem$.next(this.cartList);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `Item not found in cart!` });
      }
    }
    this.calcTotal();
  }

  calcTotal() {
    let totalItemPrice = 0;
    let totalDiscount = 0;
    let numberOfItem = 0;
    let totalPayablePrice = 0;
    let deliveryFee = 0;
    let will_save = 0;

    this.cartList.forEach(product => {
      totalItemPrice += product.price * product.quantity;
      totalDiscount += (product.price_compare - product.price) * product.quantity;
      numberOfItem += product.quantity;
      deliveryFee += product.delivery_fee * product.quantity;
    });
    will_save = totalDiscount + deliveryFee;
    totalPayablePrice = totalItemPrice - will_save;

    this.totalItemPrice = totalItemPrice;
    this.totalDiscount = totalDiscount;
    this.numberOfItem = numberOfItem;
    this.totalPayablePrice = totalPayablePrice;
    this.deliveryFee = deliveryFee;
    this.will_save = will_save;
  }

  gotoRoute(url: string) {
    this.route.navigate([url]);
    localStorage.setItem('order_summary', JSON.stringify(this.cartList));
  }

}
