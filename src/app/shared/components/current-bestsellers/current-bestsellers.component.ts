import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-bestsellers',
  templateUrl: './current-bestsellers.component.html',
  styleUrls: ['./current-bestsellers.component.scss']
})
export class CurrentBestsellersComponent implements OnInit {
  products!: any[];

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {

    this.responsiveOptions = [
      {
        breakpoint: '3000px',
        numVisible: 10,
        numScroll: 1
      },
      {
        breakpoint: '2000px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1000px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '800px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '600px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '300px',
        numVisible: 1,
        numScroll: 1
      }
    ];


    this.products = [
      {
        image: 'assets/products/1.jpg',
        type: 'Modern',
        name: 'Consectetur Videntur',
        sale: false,
        btn_type: 'add',
        vendor: 'Dolce & Gabbana',
        price: '210.00',
        price_compare: '',
        reviews: 'No reviews',
        reviews_count: '',
        rating: 5
      },
      {
        image: 'assets/products/2.jpg',
        type: 'Office',
        name: 'The Trials Of Apollo',
        sale: true,
        btn_type: 'select',
        vendor: 'Armani',
        price: '12.00',
        price_compare: '15.00',
        reviews: 'No reviews',
        reviews_count: '',
        rating: 4
      },
      {
        image: 'assets/products/3.jpg',
        type: 'Party',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'select',
        vendor: 'Christian Dior',
        price: '12.00',
        price_compare: '',
        reviews: 'review',
        reviews_count: '1',
        rating: 2
      },
      {
        image: 'assets/products/4.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: '12.00',
        price_compare: '',
        reviews: 'reviews',
        reviews_count: '1000',
        rating: 4
      },
      {
        image: 'assets/products/5.jpg',
        type: 'Modern',
        name: 'Consectetur Videntur',
        sale: false,
        btn_type: 'add',
        vendor: 'Dolce & Gabbana',
        price: '210.00',
        price_compare: '',
        reviews: 'No reviews',
        reviews_count: '',
        rating: 5
      },
      {
        image: 'assets/products/6.jpg',
        type: 'Office',
        name: 'The Trials Of Apollo',
        sale: true,
        btn_type: 'select',
        vendor: 'Armani',
        price: '12.00',
        price_compare: '15.00',
        reviews: 'reviews',
        reviews_count: '20',
        rating: 4
      },
      {
        image: 'assets/products/7.jpg',
        type: 'Party',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'select',
        vendor: 'Christian Dior',
        price: '12.00',
        price_compare: '',
        reviews: 'No reviews',
        reviews_count: '',
        rating: 2
      },
      {
        image: 'assets/products/8.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: '12.00',
        price_compare: '',
        reviews: 'reviews',
        reviews_count: '2',
        rating: 4
      },
      {
        image: 'assets/products/9.jpg',
        type: 'Modern',
        name: 'Ten Thousand Skies Above You',
        sale: false,
        btn_type: 'add',
        vendor: 'Christian Dior',
        price: '12.00',
        price_compare: '',
        reviews: 'No reviews',
        reviews_count: '',
        rating: 4
      }
    ]
  }
}
