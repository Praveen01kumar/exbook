import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  images: any[] | undefined;
  screenWidth: number;
  thumbnail: string | any = 'left';
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window?.innerWidth;
    if (this.screenWidth > 750) {
      this.thumbnail = 'left';
    } else {
      this.thumbnail = 'bottum';
    }
  }
  constructor() { this.screenWidth = window?.innerWidth; }
  Quntity: number = 1;

  ngOnInit(): void {
    if (this.screenWidth > 750) {
      this.thumbnail = 'left';
    } else {
      this.thumbnail = 'bottum';
    }
    this.images = [
      {
        itemImageSrc: 'assets/products/1.jpg',
        thumbnailImageSrc: 'assets/products/1.jpg',
        title: 'Title 1',
        index: 1
      },
      {
        itemImageSrc: 'assets/products/2.jpg',
        thumbnailImageSrc: 'assets/products/2.jpg',
        title: 'Title 2',
        index: 2
      },
      {
        itemImageSrc: 'assets/products/3.jpg',
        thumbnailImageSrc: 'assets/products/3.jpg',
        title: 'Title 3',
        index: 3
      },
      {
        itemImageSrc: 'assets/products/4.jpg',
        thumbnailImageSrc: 'assets/products/4.jpg',
        title: 'Title 4',
        index: 4
      }, {
        itemImageSrc: 'assets/products/5.jpg',
        thumbnailImageSrc: 'assets/products/5.jpg',
        title: 'Title 1',
        index: 1
      },
      {
        itemImageSrc: 'assets/products/6.jpg',
        thumbnailImageSrc: 'assets/products/6.jpg',
        title: 'Title 2',
        index: 2
      },
      {
        itemImageSrc: 'assets/products/7.jpg',
        thumbnailImageSrc: 'assets/products/7.jpg',
        title: 'Title 3',
        index: 3
      },
      {
        itemImageSrc: 'assets/products/8.jpg',
        thumbnailImageSrc: 'assets/products/8.jpg',
        title: 'Title 4',
        index: 4
      }
    ]
  }

  quantity(type: string) {
    if (type === '-' && this.Quntity > 1) {
      this.Quntity = this.Quntity - 1;
    }
    if (type === '+' && this.Quntity < 100) {
      this.Quntity = this.Quntity + 1;
    }
  }
}
