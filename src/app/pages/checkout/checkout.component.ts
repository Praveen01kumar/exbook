import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { pageRoute } from 'src/app/shared/constant/route.const';
import { SharedService } from 'src/app/shared/services/shared-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit {
  numberOfItem: number = 0;
  totalItemPrice: number = 0;
  totalDiscount: number = 0;
  totalPayablePrice: number = 0;
  deliveryFee: number = 0;
  will_save: number = 0;
  islogedIn: boolean = false;
  addressData: any;
  paymentData: any;
  addressList: any[] = [
    { name: "Abhishek Gupta", type: "HOME", contact: "9128342132", address: "NS Cosmatric, Shop No 4, Madanpur, Phase 2, Sector 54, Sahibzada Ajit Singh Nagar, Punjab 160055., Madanpur chowk, Chandigarh, Chandigarh" },
    { name: "Abhishek Gupta", type: "WORK", contact: "9128342132", address: "Quark Atrium, A-45, (Anviam Solution pvt.), Quark Atrium, A-45, Industrial Area Phase VIII-B, Mohali, Punjab, India 160071, Mohali, Punjab" },
  ];
  paymentList: any[] = [
    { name: "Google Pay UPI", contact: "9128342132" },
    { name: "UPI", contact: "9128342132" },
    { name: "Wallets", contact: "9128342132" },
    { name: "Credit / Debit / ATM Card", contact: "9128342132" },
    { name: "EMI (Easy Installments)", contact: "9128342132" },
    { name: "Net Banking", contact: "9128342132" },
    { name: "Cash on Delivery", contact: "9128342132" },
  ];
  order_summaryList: any[] = [];
  pageRoute: any = pageRoute;
  constructor(
    private messageService: MessageService,
    public shardService: SharedService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.callOninit();
  }
  callOninit() {
    this.addressData = this.addressList[0];
    this.paymentData = this.paymentList[0];
    const order_summary = localStorage.getItem('order_summary');
    this.order_summaryList = order_summary ? JSON.parse(order_summary) : [];
    this.calcTotal();
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }

  quantity(type: string, item: any) {
    const order_summary = localStorage.getItem('order_summary');
    this.order_summaryList = order_summary ? JSON.parse(order_summary) : [];
    if (item) {
      const index = this.order_summaryList.findIndex((el: any) => el?.id == item?.id);
      if (index >= 0) {
        if (type === '-' && item.quantity > 1) {
          this.order_summaryList[index].quantity = item.quantity - 1;
        }
        if (type === '+' && item.quantity <= item.stock_quantity) {
          if (item.quantity >= item.stock_quantity) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `insufficient item in cart!` });
          } else {
            this.order_summaryList[index].quantity = item.quantity + 1;
          }
        }
        localStorage.setItem('order_summary', JSON.stringify(this.order_summaryList));
        this.shardService.order_summary$.next(this.order_summaryList);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `Item not found in cart!` });
      }
    }
    this.calcTotal();
  }

  removeFromCart(item: any) {
    const order_summary = localStorage.getItem('order_summary');
    this.order_summaryList = order_summary ? JSON.parse(order_summary) : [];
    if (item) {
      const index = this.order_summaryList.findIndex((el: any) => el?.id == item?.id);
      if (index >= 0) {
        this.order_summaryList.splice(index, 1);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `${item?.name} has been deleted successfully!` });
        localStorage.setItem('order_summary', JSON.stringify(this.order_summaryList));
        this.shardService.order_summary$.next(this.order_summaryList);
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

    this.order_summaryList.forEach(product => {
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

  gotoRoute(url: string, value: string) {
    if (value === 'term_policy') {
      window.open(url, '_blank');
    } else {
      this.route.navigate([url]);
    }
  }

}
