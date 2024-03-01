import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {
  constructor(private router: Router) { }
  userMenuitems: MenuItem[] | undefined;
  settingMenuitems: MenuItem[] | undefined;

  ngOnInit() {
    this.callOninit();
  }

  update() { }
  delete() { }

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
            command: () => { this.update(); }
          },
          {
            label: 'Login',
            icon: 'pi pi-sign-in',
            command: () => { this.delete(); }
          },
          {
            label: 'My Profile',
            icon: 'pi pi-user',
            command: () => { this.update(); }
          },
          {
            label: 'Orders',
            icon: 'pi pi-truck',
            command: () => { this.delete(); }
          },
          {
            label: 'Rewards',
            icon: 'pi pi-inbox',
            command: () => { this.delete(); }
          },
          {
            label: 'Wishlist',
            icon: 'pi pi-list',
            command: () => { this.update(); }
          },
          {
            label: 'Gift Cards',
            icon: 'pi pi-gift',
            command: () => { this.delete(); }
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
            command: () => { this.update(); }
          },
          {
            label: '24x7 Supports',
            icon: 'pi pi-phone',
            command: () => { this.update(); }
          },
          {
            label: 'Advertise',
            icon: 'pi pi-chart-line',
            command: () => { this.delete(); }
          }
        ]
      }
    ];

  }


}