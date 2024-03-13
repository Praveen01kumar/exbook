import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared-service';
import { MessageService } from 'primeng/api';
import { pageRoute } from 'src/app/shared/constant/route.const';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  providers: [MessageService]
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    public shardService: SharedService,
    private messageService: MessageService
  ) { this.screenWidth = window?.innerWidth; }
  Quntity: number = 1;
  productData: any;
  cartList: any[] = [];

  ngOnInit(): void {
    this.callOnInit();
  }

  quantity(type: string) {
    if (type === '-' && this.Quntity > 1) {
      this.Quntity = this.Quntity - 1;
    }
    if (type === '+' && this.Quntity < 100) {
      this.Quntity = this.Quntity + 1;
    }
  }

  callOnInit() {
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
    ];
    this.apiService.productsList().subscribe((res: any) => {
      if (res) {
        this.getProductData(res?.products);
      }
    }, (err) => { });
  }

  getProductData(products: any) {
    let productId: any, productTitle: any;
    this.route.queryParams.subscribe((params: any) => { productId = params?.id; });
    productTitle = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productData = products.find((item: any) => item?.id == productId);
    } else if (productTitle) {
      this.productData = products.find((item: any) => item?.name == productTitle?.replace(/\-+/g, ' '));
    }
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }

  addToCart(product: any) {
    const cartItem = localStorage.getItem('cartItem');
    this.cartList = cartItem ? JSON.parse(cartItem) : [];
    const duplicate = this.cartList.find((item: any) => item.id == product.id);
    if (duplicate) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${product?.name} has already been added to your cart!` });
    } else {
      this.cartList.push(product);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `${product?.name} has been added to your cart!` });
      localStorage.setItem('cartItem', JSON.stringify(this.cartList));
    }
    this.shardService.cartItem$.next(this.cartList);
  }

  buyNow(product: any) {
    const itemList: any[] = [product];
    this.router.navigate([pageRoute?.checkout]);
    localStorage.setItem('order_summary', JSON.stringify(itemList));
  }


}
