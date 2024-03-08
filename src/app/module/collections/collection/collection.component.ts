import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  products!: any[];
  productsDataList!: any[];
  sideBar: boolean = false;
  screenWidth: number;
  first: number = 0;
  rows: number = 30;
  rowsPerPageOptions: number[] = [30, 60, 90, 120];
  filterData: any;
  loader: boolean = false;
  constructor(
    private route: Router,
    private apiService: ApiService
  ) { this.screenWidth = window?.innerWidth; }

  ngOnInit(): void {
    this.onInitCall();
  }

  GotoDetail(url: string) {
    const newurl = url.replace(/\s+/g, '-');
    this.route.navigate(['books/' + newurl]);
  }

  prctg(op: number, sp: number) { return (op && sp) ? (((op - sp) / op) * 100).toFixed(2) : 0; }


  sideToggel() {
    this.sideBar = !this.sideBar;
  }

  onInitCall() {
    this.loader = true;
    this.apiService.productsList().pipe(finalize(() => { this.loader = false; })).subscribe((res: any) => {
      if (res) {
        this.products = res?.products;
        this.productsDataList = this.products?.slice(0, 30);
        this.filterData = {
          AgeGroup: res?.AgeGroup,
          Author: res?.Author,
          Availability: res?.Availability,
          Binding: res?.Binding,
          Category: res?.Category,
          CustomerRating: res?.CustomerRating,
          DeliveryDay: res?.DeliveryDay,
          Discount: res?.Discount,
          Languages: res?.Languages,
          LatestArrivals: res?.LatestArrivals,
          Offers: res?.Offers,
          filterValue: res?.filterValue,
          rangeValues: res?.rangeValues
        }
      }
    }, (err) => {
      this.loader = false;
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.productsDataList = this.products?.slice(this.first, this.first + this.rows);
  }
}