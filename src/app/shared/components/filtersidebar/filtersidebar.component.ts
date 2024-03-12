import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'filtersidebar',
  templateUrl: './filtersidebar.component.html',
  styleUrls: ['./filtersidebar.component.scss']
})
export class FiltersidebarComponent implements OnInit, OnChanges {

  @Input() filterData: any;

  rangeValues: number[] = [0, 10000];
  minRangeValues: number = 0;
  maxRangeValues: number = 10000;
  showLess_more: boolean = false;

  DeliveryDay: any[] = [];
  DeliveryDay_selectedItems!: any[];
  DeliveryDay_selectAll = false;

  Category: any[] = [];
  Category_selectedItems!: any[];
  Category_selectAll = false;

  CustomerRating: any[] = [];
  CustomerRating_selectedItems!: any[];
  CustomerRating_selectAll = false;

  Languages: any[] = [];
  Languages_selectedItems!: any[];
  Languages_selectAll = false;

  Author: any[] = [];
  Author_selectedItems!: any[];
  Author_selectAll = false;

  Discount: any[] = [];
  Discount_selectedItems!: any[];
  Discount_selectAll = false;

  Availability: any[] = [];
  Availability_selectedItems!: any[];
  Availability_selectAll = false;

  Offers: any[] = [];
  Offers_selectedItems!: any[];
  Offers_selectAll = false;

  Binding: any[] = [];
  Binding_selectedItems!: any[];
  Binding_selectAll = false;

  AgeGroup: any[] = [];
  AgeGroup_selectedItems!: any[];
  AgeGroup_selectAll = false;

  LatestArrivals: any[] = [];
  LatestArrivals_selectedItems!: any[];
  LatestArrivals_selectAll = false;

  appliedFiltersArr: any[] = [];
  filterChipList: number = 4;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  DeliveryDayAllChange(event: any) {
    this.DeliveryDay_selectedItems = event.checked ? [...this.DeliveryDay] : [];
    this.DeliveryDay_selectAll = event.checked;
    event.updateModel(this.DeliveryDay_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  DeliveryDayChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.DeliveryDay.filter(item => !value.includes(item)));
    if (value) {
      this.DeliveryDay_selectAll = value.length === this.DeliveryDay.length;
      this.selectedFilter(value, 'delivery_day');
    }
    this.sendFilterValue();
  }

  CategoryAllChange(event: any) {
    this.Category_selectedItems = event.checked ? [...this.Category] : [];
    this.Category_selectAll = event.checked;
    event.updateModel(this.Category_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  CategoryChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Category.filter(item => !value.includes(item)));
    if (value) {
      this.Category_selectAll = value.length === this.Category.length;
      this.selectedFilter(value, 'category');
    }
    this.sendFilterValue();
  }

  CustomerRatingAllChange(event: any) {
    this.CustomerRating_selectedItems = event.checked ? [...this.CustomerRating] : [];
    this.CustomerRating_selectAll = event.checked;
    event.updateModel(this.CustomerRating_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  CustomerRatingChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.CustomerRating.filter(item => !value.includes(item)));
    if (value) {
      this.CustomerRating_selectAll = value.length === this.CustomerRating.length;
      this.selectedFilter(value, 'customer_rating');
    }
    this.sendFilterValue();
  }

  LanguagesAllChange(event: any) {
    this.Languages_selectedItems = event.checked ? [...this.Languages] : [];
    this.Languages_selectAll = event.checked;
    event.updateModel(this.Languages_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  LanguagesChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Languages.filter(item => !value.includes(item)));
    if (value) {
      this.Languages_selectAll = value.length === this.Languages.length;
      this.selectedFilter(value, 'languages');
    }
    this.sendFilterValue();
  }

  AuthorAllChange(event: any) {
    this.Author_selectedItems = event.checked ? [...this.Author] : [];
    this.Author_selectAll = event.checked;
    event.updateModel(this.Author_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  AuthorChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Author.filter(item => !value.includes(item)));
    if (value) {
      this.Author_selectAll = value.length === this.Author.length;
      this.selectedFilter(value, 'author');
    }
    this.sendFilterValue();
  }

  DiscountAllChange(event: any) {
    this.Discount_selectedItems = event.checked ? [...this.Discount] : [];
    this.Discount_selectAll = event.checked;
    event.updateModel(this.Discount_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  DiscountChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Discount.filter(item => !value.includes(item)));
    if (value) {
      this.Discount_selectAll = value.length === this.Discount.length;
      this.selectedFilter(value, 'discount');
    }
    this.sendFilterValue();
  }

  OffersAllChange(event: any) {
    this.Offers_selectedItems = event.checked ? [...this.Offers] : [];
    this.Offers_selectAll = event.checked;
    event.updateModel(this.Offers_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  OffersChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Offers.filter(item => !value.includes(item)));
    if (value) {
      this.Offers_selectAll = value.length === this.Offers.length;
      this.selectedFilter(value, 'offers');
    }
    this.sendFilterValue();
  }

  AvailabilityAllChange(event: any) {
    this.Availability_selectedItems = event.checked ? [...this.Availability] : [];
    this.Availability_selectAll = event.checked;
    event.updateModel(this.Availability_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  AvailabilityChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Availability.filter(item => !value.includes(item)));
    if (value) {
      this.Availability_selectAll = value.length === this.Availability.length;
      this.selectedFilter(value, 'availability');
    }
    this.sendFilterValue();
  }

  BindingAllChange(event: any) {
    this.Binding_selectedItems = event.checked ? [...this.Binding] : [];
    this.Binding_selectAll = event.checked;
    event.updateModel(this.Binding_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  BindingChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.Binding.filter(item => !value.includes(item)));
    if (value) {
      this.Binding_selectAll = value.length === this.Binding.length;
      this.selectedFilter(value, 'binding');
    }
    this.sendFilterValue();
  }

  AgeGroupAllChange(event: any) {
    this.AgeGroup_selectedItems = event.checked ? [...this.AgeGroup] : [];
    this.AgeGroup_selectAll = event.checked;
    event.updateModel(this.AgeGroup_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  AgeGroupChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.AgeGroup.filter(item => !value.includes(item)));
    if (value) {
      this.AgeGroup_selectAll = value.length === this.AgeGroup.length;
      this.selectedFilter(value, 'age_group');
    }
    this.sendFilterValue();
  }

  LatestArrivalsAllChange(event: any) {
    this.LatestArrivals_selectedItems = event.checked ? [...this.LatestArrivals] : [];
    this.LatestArrivals_selectAll = event.checked;
    event.updateModel(this.LatestArrivals_selectedItems, event.originalEvent);
    this.sendFilterValue();
  }

  LatestArrivalsChange(event: any) {
    const { originalEvent, value } = event;
    this.removeUnchecked(this.LatestArrivals.filter(item => !value.includes(item)));
    if (value) {
      this.LatestArrivals_selectAll = value.length === this.LatestArrivals.length;
      this.selectedFilter(value, 'latest_arrivals');
    }
    this.sendFilterValue();
  }

  onChipRemove(event: any) {
    if (event?.type) {
      if (event?.type === 'delivery_day') {
        this.DeliveryDay_selectedItems = this.DeliveryDay_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'category') {
        this.Category_selectedItems = this.Category_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'customer_rating') {
        this.CustomerRating_selectedItems = this.CustomerRating_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'languages') {
        this.Languages_selectedItems = this.Languages_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'author') {
        this.Author_selectedItems = this.Author_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'discount') {
        this.Discount_selectedItems = this.Discount_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'offers') {
        this.Availability_selectedItems = this.Availability_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'availability') {
        this.Offers_selectedItems = this.Offers_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'binding') {
        this.Binding_selectedItems = this.Binding_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'age_group') {
        this.AgeGroup_selectedItems = this.AgeGroup_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'latest_arrivals') {
        this.LatestArrivals_selectedItems = this.LatestArrivals_selectedItems.filter(item => item?.value !== event?.value);
      }
      if (event?.type === 'price_range') {
        this.rangeValues = [0, 10000];
        const index = this.appliedFiltersArr.findIndex((item: any) => item?.type === 'price_range');
        if (index >= 0) {
          this.appliedFiltersArr.splice(index, 1);
        }
      }
      this.appliedFiltersArr = this.appliedFiltersArr.filter(item => item?.value !== event?.value);
      this.sendFilterValue();
    }
  }

  onSliderEnd(event: any) {
    const value = { label: `${event?.values[0]}-${event?.values[1]}`, value: {min:event?.values[0], max:event?.values[1]}, type: 'price_range' };
    const exists = this.appliedFiltersArr.some((item: any) => item?.type === 'price_range');
    if (!exists) {
      this.appliedFiltersArr.push(value);
    } else {
      const index = this.appliedFiltersArr.findIndex((item: any) => item?.type === 'price_range');
      if (index >= 0) {
        this.appliedFiltersArr[index] = value;
      }
    }
    this.sendFilterValue();
  }

  clearAllFilter() {
    this.appliedFiltersArr = [];
    this.DeliveryDay_selectedItems = [];
    this.Category_selectedItems = [];
    this.CustomerRating_selectedItems = [];
    this.Languages_selectedItems = [];
    this.Author_selectedItems = [];
    this.Discount_selectedItems = [];
    this.Availability_selectedItems = [];
    this.Offers_selectedItems = [];
    this.Binding_selectedItems = [];
    this.AgeGroup_selectedItems = [];
    this.LatestArrivals_selectedItems = [];
    this.rangeValues = [0, 10000];
    this.sendFilterValue();
  }

  clearPrice() {
    this.rangeValues = [0, 10000];
    const index = this.appliedFiltersArr.findIndex((item: any) => item?.type === 'price_range');
    if (index >= 0) {
      this.appliedFiltersArr.splice(index, 1);
    }
    this.sendFilterValue();
  }

  removeUnchecked(value: any[]) {
    if (value?.length) {
      this.appliedFiltersArr = this.appliedFiltersArr.filter(item2 => !value.some(item1 => item1?.value === item2?.value));
    }
  };

  selectedFilter(value: any[], type: string) {
    if (value?.length) {
      value?.forEach((element: any) => {
        const exists = this.appliedFiltersArr.some((item: any) => item?.value === element?.value);
        if (!exists) { this.appliedFiltersArr.push({ ...element, type: type }); }
      });
    }
  }

  show_M_L() {
    this.showLess_more = !this.showLess_more;
    if (!this.showLess_more) {
      this.filterChipList = 4;
    } else {
      this.filterChipList = this.appliedFiltersArr?.length;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterData'] && changes['filterData'].currentValue) {
      this.DeliveryDay = this.filterData?.DeliveryDay;
      this.AgeGroup = this.filterData?.AgeGroup;
      this.Author = this.filterData?.Author;
      this.Availability = this.filterData?.Availability;
      this.Binding = this.filterData?.Binding;
      this.Category = this.filterData?.Category;
      this.CustomerRating = this.filterData?.CustomerRating;
      this.Discount = this.filterData?.Discount;
      this.Languages = this.filterData?.Languages;
      this.LatestArrivals = this.filterData?.LatestArrivals;
      this.Offers = this.filterData?.Offers;
      this.rangeValues = this.filterData?.rangeValues
      this.sendFilterValue();
    }
  }

  sendFilterValue() {
    this.newItemEvent.emit(this.appliedFiltersArr);
  }

}
