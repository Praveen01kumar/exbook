import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images!: any[];
  // currentSlideIndex: number = 0;
  // startX: number | null = null;
  // deltaX: number = 0;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit(): void {

    this.images = [
      {
        itemImageSrc: 'assets/home_banner/1.png',
        thumbnailImageSrc: 'assets/home_banner/1.png',
        title: 'Title 1',
        index:1
      },
      {
        itemImageSrc: 'assets/home_banner/2.png',
        thumbnailImageSrc: 'assets/home_banner/2.png',
        title: 'Title 2',
        index:2
      },
      {
        itemImageSrc: 'assets/home_banner/3.png',
        thumbnailImageSrc: 'assets/home_banner/3.png',
        title: 'Title 3',
        index:3
      },
      {
        itemImageSrc: 'assets/home_banner/4.png',
        thumbnailImageSrc: 'assets/home_banner/4.png',
        title: 'Title 4',
        index:4
      }
    ];

  }

  // onTouchStart(event: TouchEvent) {
  //   this.startX = event.touches[0].clientX;
  //   this.deltaX = 0;
  // }

  // onTouchMove(event: TouchEvent) {
  //   if (!this.startX) {
  //     return;
  //   }
  //   this.deltaX = event.touches[0].clientX - this.startX;
  // }

  // onTouchEnd(event: TouchEvent) {
  //   if (Math.abs(this.deltaX) > 50) {
  //     if (this.deltaX > 0) {
  //       this.prevSlide();
  //     } else {
  //       this.nextSlide();
  //     }
  //   }
  //   this.startX = null;
  // }

  // prevSlide() {
  //   this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  // }

  // nextSlide() {
  //   this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  // }

}
