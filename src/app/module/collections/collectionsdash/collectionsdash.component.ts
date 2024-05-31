import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collectionsdash',
  templateUrl: './collectionsdash.component.html',
  styleUrls: ['./collectionsdash.component.scss']
})
export class CollectionsdashComponent implements OnInit {

  constructor(private router: Router) { }

  categoryList: any[] = [
    { name: 'All', url: "categories/v1/all", image: "assets/category/1.webp" },
    { name: 'Arts & Photography', url: "categories/v1/arts-photography", image: "assets/category/2.webp" },
    { name: 'Biographies Memoirs', url: "categories/v1/biographies-memoirs", image: "assets/category/3.webp" },
    { name: 'Childrens Books', url: "categories/v1/childrens-books", image: "assets/category/4.webp" },
    { name: 'Cook book', url: "categories/v1/cookbook", image: "assets/category/5.webp" },
    { name: 'Literature Fiction', url: "categories/v1/literature-fiction", image: "assets/category/6.webp" },
    { name: 'Mystery Suspense', url: "categories/v1/mystery-suspense", image: "assets/category/7.webp" },
    { name: 'Sci Fi Fantasy', url: "categories/v1/sci-fi-fantasy", image: "assets/category/8.webp" },
    { name: 'Current Bestsellers', url: "categories/v1/current-bestsellers", image: "assets/category/9.webp" },
    { name: 'Limited Time Offer', url: "categories/v1/limited-time-offer", image: "assets/category/10.webp" },
    { name: 'Top Rates Book', url: "categories/v1/top-rates-book", image: "assets/category/11.webp" },
  ];

  ngOnInit(): void {

  }

  gotoCategory(url:string){
    this.router.navigate([url]);
  }

}
