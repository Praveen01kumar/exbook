import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../../services/shared-service';
import { collRoute, pageRoute } from '../../constant/route.const';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {
  pageRoute: any = pageRoute;
  constructor(
    private router: Router,
    public sharedService: SharedService
  ) { }
  userMenuitems: MenuItem[] | undefined;
  settingMenuitems: MenuItem[] | undefined;
  categoryMenuitems: MenuItem[] | undefined;
  cartitem: any[] = [];
  ngOnInit() {
    this.callOninit();
  }

  gotoRoute(url: string) {
    this.router.navigate([url]);
  }

  callOninit() {
    this.userMenuitems = [
      {
        items: [
          {
            label: 'Sign Up',
            icon: 'pi pi-user-plus',
            command: () => { this.gotoRoute(pageRoute?.user_register); }
          },
          {
            label: 'Login',
            icon: 'pi pi-sign-in',
            command: () => { this.gotoRoute(pageRoute?.login); }
          },
          {
            label: 'My Profile',
            icon: 'pi pi-user',
            command: () => { this.gotoRoute(pageRoute?.myprofile); }
          },
          {
            label: 'Orders',
            icon: 'pi pi-truck',
            command: () => { this.gotoRoute(pageRoute?.orders); }
          },
          {
            label: 'Wishlist',
            icon: 'pi pi-list',
            command: () => { this.gotoRoute(pageRoute?.wishlist); }
          },
        ]
      }
    ];

    this.categoryMenuitems = [
      {
        items: [
          {
            label: 'Collections',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.empty); }
          },
          {
            label: 'Arts & Photography',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.arts_photography); }
          },
          {
            label: 'Biographies Memoirs',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.biographies_memoirs); }
          },
          {
            label: 'Childrens Books',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.childrens_books); }
          },
          {
            label: 'Cook book',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.cookbook); }
          },
          {
            label: 'Literature Fiction',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.literature_fiction); }
          },
          {
            label: 'Mystery Suspense',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.mystery_suspense); }
          },
          {
            label: 'Sci Fi Fantasy',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.sci_fi_fantasy); }
          },
          {
            label: 'Current Bestsellers',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.current_bestsellers); }
          },
          {
            label: 'Limited Time Offer',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.limited_time_offer); }
          },
          {
            label: 'Top Rates Book',
            command: () => { this.gotoRoute(pageRoute?.categories + '/' + collRoute?.lay_out + '/' + collRoute?.top_rates_book); }
          }
        ]
      }
    ];

    this.settingMenuitems = [
      {
        items: [
          {
            label: 'Become a Seller',
            icon: 'pi pi-briefcase',
            command: () => { this.gotoRoute(pageRoute?.seller_register); }
          },
          {
            label: '24x7 Supports',
            icon: 'pi pi-phone',
            command: () => { this.gotoRoute(pageRoute?.supports); }
          },
          {
            label: 'Advertise',
            icon: 'pi pi-chart-line',
            command: () => { this.gotoRoute(pageRoute?.advertise); }
          }
        ]
      }
    ];
    const cartItem = localStorage.getItem('cartItem');
    this.cartitem = cartItem ? JSON.parse(cartItem) : [];
    this.sharedService.cartItem$.subscribe((data: any) => {
      if (data?.length) {
        const cartItem = localStorage.getItem('cartItem');
        this.cartitem = cartItem ? JSON.parse(cartItem) : [];
      }
    });


    console.log('hello from header');

  }


}