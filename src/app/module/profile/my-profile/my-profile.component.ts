import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pageRoute, propRoute } from 'src/app/shared/constant/route.const';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  propRoute: any = propRoute;
  pageRoute: any = pageRoute;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
   
  }

  gotoRoute(url: string) {
    this.router.navigate([url]);
  }

}
