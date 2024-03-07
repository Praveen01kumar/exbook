import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtersidebar',
  templateUrl: './filtersidebar.component.html',
  styleUrls: ['./filtersidebar.component.scss']
})
export class FiltersidebarComponent implements OnInit {

  rangeValues: number[] = [0, 10000];
  minRangeValues: number = 0;
  maxRangeValues: number = 10000;

  DeliveryDay: any[] = [
    { label: 'Get It Today', value: 'Get_It_Today' },
    { label: 'Get It by Tomorrow', value: 'Get_It_by_Tomorrow' },
    { label: 'Get It in 2 Days', value: 'Get_It_in_two_Days' },
  ];
  DeliveryDay_selectedItems!: any[];
  DeliveryDay_selectAll = false;
  Category: any[] = [
    { label: 'All', value: 'all_collections' },
    { label: 'Arts & Photography', value: 'arts_photography' },
    { label: 'Biographies and Memoirs', value: 'biographies_memoirs' },
    { label: 'Childrens Books', value: 'childrens_books' },
    { label: 'Cook Book', value: 'cookbook' },
    { label: 'Literature Fiction', value: 'literature_fiction' },
    { label: 'Mystery Suspense', value: 'mystery_suspense' },
    { label: 'Sci Fi Fantasy', value: 'sci_fi_fantasy' },
    { label: 'Current Bestsellers', value: 'current_bestsellers' },
    { label: 'Limited Time Offer', value: 'limited_time_offer' },
    { label: 'Top Rates Book', value: 'top_rates_book' },
  ];
  Category_selectedItems!: any[];
  Category_selectAll = false;
  CustomerRating: any[] = [
    { label: '4★ & above', value: 'four_star_above' },
    { label: '3★ & above', value: 'three_star_above' },
  ];
  CustomerRating_selectedItems!: any[];
  CustomerRating_selectAll = false;
  Languages: any[] = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Marathi', value: 'Marathi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Telugu', value: 'Telugu' },
    { label: 'Bengali', value: 'Bengali' },
    { label: 'Malayalam', value: 'Malayalam' },
    { label: 'Sanskrit', value: 'Sanskrit' },
    { label: 'Urdu', value: 'Urdu' },
    { label: 'Kannada', value: 'Kannada' },
    { label: 'Punjabi', value: 'Punjabi' },
    { label: 'Oriya', value: 'Oriya' },
    { label: 'Gujarati', value: 'Gujarati' },
    { label: 'Assamese', value: 'Assamese' },
    { label: 'Maithili', value: 'Maithili' },
    { label: 'Bhojpuri', value: 'Bhojpuri' },
  ];
  Languages_selectedItems!: any[];
  Languages_selectAll = false;
  Author: any[] = [
    { label: 'Wonder House Books', value: 'Wonder House Books' },
    { label: 'Thibaut Meurisse', value: 'Thibaut Meurisse' },
    { label: 'Joseph Murphy', value: 'Joseph Murphy' },
    { label: 'James Clear', value: 'James Clear' },
    { label: 'Napoleon Hill', value: 'Napoleon Hill' },
    { label: 'Dale Carnegie', value: 'Dale Carnegie' },
    { label: 'Dale Carnegi', value: 'Dale Carnegi' },
    { label: 'Maple Press', value: 'Maple Press' },
    { label: 'George S. Clason', value: 'George S. Clason' },
    { label: 'Luke Wilson', value: 'Luke Wilson' },
  ];
  Author_selectedItems!: any[];
  Author_selectAll = false;
  Discount: any[] = [
    { label: '10% Off or more', value: 'ten_Off_or_more' },
    { label: '25% Off or more', value: 'twentyfive_Off_or_more' },
    { label: '35% Off or more', value: 'thirtyfive_Off_or_more' },
    { label: '50% Off or more', value: 'fifty_Off_or_more' },
    { label: '60% Off or more', value: 'sixty_Off_or_more' },
    { label: '70% Off or more', value: 'seventy_Off_or_more' }
  ];
  Discount_selectedItems!: any[];
  Discount_selectAll = false;
  Availability: any[] = [
    { label: 'Include Out of Stock', value: 'Include_Out_of_Stock' }
  ];
  Availability_selectedItems!: any[];
  Availability_selectAll = false;
  Offers: any[] = [
    { label: 'Buy More, Save More', value: 'Buy_More_Save_More' },
    { label: 'Special Price', value: 'Special_Price' }
  ];
  Offers_selectedItems!: any[];
  Offers_selectAll = false;
  Binding: any[] = [
    { label: 'Paperback', value: 'Paperback' },
    { label: 'Hardcover', value: 'Hardcover' },
    { label: 'Board Book', value: 'Board_Book' },
    { label: 'Audiobook', value: 'Audiobook' },
    { label: 'Leather Bound', value: 'Leather_Bound' },
    { label: 'Boxed Set', value: 'Boxed_Set' },
  ];
  Binding_selectedItems!: any[];
  Binding_selectAll = false;
  AgeGroup: any[] = [
    { label: '0 - 2 Years', value: 'zero_to_two_Years' },
    { label: '2 - 5 Years', value: 'two_to_five_Years' },
    { label: '5 - 9 Years', value: 'five_to_nine_Years' },
    { label: '9 - 12 Years', value: 'nine_to_twelve_Years' },
    { label: 'Teens', value: 'Teens' }
  ];
  AgeGroup_selectedItems!: any[];
  AgeGroup_selectAll = false;
  LatestArrivals: any[] = [
    { label: 'Last 30 Days', value: 'Last_thirty_Days' },
    { label: 'Last 90 Days', value: 'Last_ninety_Days' },
    { label: 'Last 150 Days', value: 'Last_one_fifty_Days' }
  ];
  LatestArrivals_selectedItems!: any[];
  LatestArrivals_selectAll = false;

  appliedFiltersArr: any[] = [
    { label: 'Last 30 Days', value: 'Last_thirty_Days' },
    { label: 'Paperback', value: 'Paperback' },
    { label: 'Wonder House Books', value: 'Wonder House Books' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Arts & Photography', value: 'arts_photography' },
  ]

  constructor() { }

  ngOnInit(): void { }

  DeliveryDayAllChange(event: any) {
    this.DeliveryDay_selectedItems = event.checked ? [...this.DeliveryDay] : [];
    this.DeliveryDay_selectAll = event.checked;
    event.updateModel(this.DeliveryDay_selectedItems, event.originalEvent)
  }

  DeliveryDayChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.DeliveryDay_selectAll = value.length === this.DeliveryDay.length;
  }

  CategoryAllChange(event: any) {
    this.Category_selectedItems = event.checked ? [...this.Category] : [];
    this.Category_selectAll = event.checked;
    event.updateModel(this.Category_selectedItems, event.originalEvent)
  }

  CategoryChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.DeliveryDay_selectAll = value.length === this.DeliveryDay.length;
  }

  CustomerRatingAllChange(event: any) {
    this.CustomerRating_selectedItems = event.checked ? [...this.CustomerRating] : [];
    this.CustomerRating_selectAll = event.checked;
    event.updateModel(this.CustomerRating_selectedItems, event.originalEvent)
  }

  CustomerRatingChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.CustomerRating_selectAll = value.length === this.CustomerRating.length;
  }

  LanguagesAllChange(event: any) {
    this.Languages_selectedItems = event.checked ? [...this.Languages] : [];
    this.Languages_selectAll = event.checked;
    event.updateModel(this.Languages_selectedItems, event.originalEvent)
  }

  LanguagesChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Languages_selectAll = value.length === this.Languages.length;
  }

  AuthorAllChange(event: any) {
    this.Author_selectedItems = event.checked ? [...this.Author] : [];
    this.Author_selectAll = event.checked;
    event.updateModel(this.Author_selectedItems, event.originalEvent)
  }

  AuthorChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Author_selectAll = value.length === this.Author.length;
  }

  DiscountAllChange(event: any) {
    this.Discount_selectedItems = event.checked ? [...this.Discount] : [];
    this.Discount_selectAll = event.checked;
    event.updateModel(this.Discount_selectedItems, event.originalEvent)
  }

  DiscountChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Discount_selectAll = value.length === this.Discount.length;
  }

  OffersAllChange(event: any) {
    this.Offers_selectedItems = event.checked ? [...this.Offers] : [];
    this.Offers_selectAll = event.checked;
    event.updateModel(this.Offers_selectedItems, event.originalEvent)
  }

  OffersChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Offers_selectAll = value.length === this.Offers.length;
  }

  AvailabilityAllChange(event: any) {
    this.Availability_selectedItems = event.checked ? [...this.Availability] : [];
    this.Availability_selectAll = event.checked;
    event.updateModel(this.Availability_selectedItems, event.originalEvent)
  }

  AvailabilityChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Availability_selectAll = value.length === this.Availability.length;
  }

  BindingAllChange(event: any) {
    this.Binding_selectedItems = event.checked ? [...this.Binding] : [];
    this.Binding_selectAll = event.checked;
    event.updateModel(this.Binding_selectedItems, event.originalEvent)
  }

  BindingChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.Binding_selectAll = value.length === this.Binding.length;
  }

  AgeGroupAllChange(event: any) {
    this.AgeGroup_selectedItems = event.checked ? [...this.AgeGroup] : [];
    this.AgeGroup_selectAll = event.checked;
    event.updateModel(this.AgeGroup_selectedItems, event.originalEvent)
  }

  AgeGroupChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.AgeGroup_selectAll = value.length === this.AgeGroup.length;
  }

  LatestArrivalsAllChange(event: any) {
    this.LatestArrivals_selectedItems = event.checked ? [...this.LatestArrivals] : [];
    this.LatestArrivals_selectAll = event.checked;
    event.updateModel(this.LatestArrivals_selectedItems, event.originalEvent)
  }

  LatestArrivalsChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.LatestArrivals_selectAll = value.length === this.LatestArrivals.length;
  }

  onChipRemove(event: any) {

  }

  onSliderEnd(event: any) {

  }

  clearAllFilter() {
    this.appliedFiltersArr = [];
  }

  clearPrice() {
    this.rangeValues = [0, 10000];
  }

}
