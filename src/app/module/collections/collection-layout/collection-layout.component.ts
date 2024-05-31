import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-layout',
  templateUrl: './collection-layout.component.html',
  styleUrls: ['./collection-layout.component.scss']
})
export class CollectionLayoutComponent implements OnInit {

  constructor() { }

  sideBar: boolean = false;

  categoryList: any[] = [
    { name: 'All', url: "all" },
    { name: 'Arts & Photography', url: "arts-photography" },
    { name: 'Biographies Memoirs', url: "biographies-memoirs" },
    { name: 'Childrens Books', url: "childrens-books" },
    { name: 'Cook book', url: "cookbook" },
    { name: 'Literature Fiction', url: "literature-fiction" },
    { name: 'Mystery Suspense', url: "mystery-suspense" },
    { name: 'Sci Fi Fantasy', url: "sci-fi-fantasy" },
    { name: 'Current Bestsellers', url: "current-bestsellers" },
    { name: 'Limited Time Offer', url: "limited-time-offer" },
    { name: 'Top Rates Book', url: "top-rates-book" },
  ];

  ngOnInit(): void {

  }

  sideToggel() {
    this.sideBar = !this.sideBar;
  }

}
