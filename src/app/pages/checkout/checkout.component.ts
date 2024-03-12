import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

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
  ingredient: any;
  addressList: any[] = [
    { name: "Praveen Kumar", type: "HOME", contact: "9128342132", address: "NS Cosmatric, Shop No 4, Madanpur, Phase 2, Sector 54, Sahibzada Ajit Singh Nagar, Punjab 160055., Madanpur chowk, Chandigarh, Chandigarh" },
    { name: "Praveen Kumar", type: "WORK", contact: "9128342132", address: "Quark Atrium, A-45, (Anviam Solution pvt.), Quark Atrium, A-45, Industrial Area Phase VIII-B, Mohali, Punjab, India 160071, Mohali, Punjab" },
  ];
  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.callOninit();
  }
  callOninit() {
    this.ingredient = this.addressList[0];
  }

}
