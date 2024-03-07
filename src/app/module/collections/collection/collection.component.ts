import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  products!: any[];
  sideBar: boolean = false;
  screenWidth: number;
  constructor(private route: Router) { this.screenWidth = window?.innerWidth; }
  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.screenWidth = window?.innerWidth;
  //   if (this.screenWidth > 730) {
  //     this.sideBar = false;
  //   } else {
  //     this.sideBar = true;
  //   }
  // }

  ngOnInit(): void {
    this.products = [
      {
        image: 'assets/products/1.jpg',
        type: 'Modern',
        name: 'Consectetur Videntur',
        sale: false,
        btn_type: 'add',
        vendor: 'Dolce & Gabbana',
        price: 210.00,
        price_compare: 212.12,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 5
      },
      {
        image: 'assets/products/2.jpg',
        type: 'Office',
        name: 'The Trials Of Apollo',
        sale: true,
        btn_type: 'select',
        vendor: 'Armani',
        price: 12.40,
        price_compare: 15.10,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 4
      },
      {
        image: 'assets/products/3.jpg',
        type: 'Party',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'select',
        vendor: 'Christian Dior',
        price: 12,
        price_compare: 13,
        reviews: 'review',
        reviews_count: 1,
        rating: 2
      },
      {
        image: 'assets/products/4.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: 112.00,
        price_compare: 123,
        reviews: 'reviews',
        reviews_count: '1k',
        rating: 4
      },
      {
        image: 'assets/products/5.jpg',
        type: 'Modern',
        name: 'Consectetur Videntur',
        sale: false,
        btn_type: 'add',
        vendor: 'Dolce & Gabbana',
        price: 101,
        price_compare: 102,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 5
      },
      {
        image: 'assets/products/6.jpg',
        type: 'Office',
        name: 'The Trials Of Apollo',
        sale: true,
        btn_type: 'select',
        vendor: 'Armani',
        price: 300,
        price_compare: 463,
        reviews: 'reviews',
        reviews_count: 20,
        rating: 4
      },
      {
        image: 'assets/products/7.jpg',
        type: 'Party',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'select',
        vendor: 'Christian Dior',
        price: 12,
        price_compare: 18,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 2
      },
      {
        image: 'assets/products/8.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: 12.00,
        price_compare: 12.01,
        reviews: 'reviews',
        reviews_count: 2,
        rating: 4
      },
      {
        image: 'assets/products/9.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: 12.00,
        price_compare: 0,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 4
      },
      {
        image: 'assets/products/10.jpg',
        type: 'Modern',
        name: 'Consectetur Videntur',
        sale: false,
        btn_type: 'add',
        vendor: 'Dolce & Gabbana',
        price: 210.00,
        price_compare: 212.12,
        reviews: 'No reviews',
        reviews_count: 0,
        rating: 5
      },
    ]
  }

  GotoDetail(url: string) {
    const newurl = url.replace(/\s+/g, '-');
    this.route.navigate(['books/' + newurl]);
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }


  sideToggel() {
    this.sideBar = !this.sideBar;
  }

}
