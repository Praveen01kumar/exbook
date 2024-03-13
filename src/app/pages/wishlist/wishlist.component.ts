import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.callOninit();
  }

  callOninit() {
    const wishItem = localStorage.getItem('cartItem');
    this.wishList = wishItem ? JSON.parse(wishItem) : [];
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }


}