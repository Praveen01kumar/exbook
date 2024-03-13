import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CommingsoonComponent } from './components/commingsoon/commingsoon.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { BottumheaderComponent } from './components/bottumheader/bottumheader.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from '../pages/login/login.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FiltersidebarComponent } from './components/filtersidebar/filtersidebar.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';
import { AdminLoginComponent } from '../pages/admin-login/admin-login.component';
import { UserRegisterComponent } from '../pages/user-register/user-register.component';
import { SellerRegisterComponent } from '../pages/seller-register/seller-register.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { TopstacksComponent } from './components/topstacks/topstacks.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { LimitedOfferComponent } from './components/limited-offer/limited-offer.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { DetailpageComponent } from '../pages/detailpage/detailpage.component';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { AccordionModule } from 'primeng/accordion';
import { ListboxModule } from 'primeng/listbox';
import { SliderModule } from 'primeng/slider';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { CartListingComponent } from '../pages/cart-listing/cart-listing.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OrdersComponent } from '../pages/orders/orders.component';
import { WishlistComponent } from '../pages/wishlist/wishlist.component';
import { TermsofUseComponent } from '../pages/termsof-use/termsof-use.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { GiftCardsComponent } from '../pages/gift-cards/gift-cards.component';
import { RewardsComponent } from '../pages/rewards/rewards.component';
import { MyProfileComponent } from '../pages/my-profile/my-profile.component';
import { SupportsComponent } from '../pages/supports/supports.component';
import { AdvertiseComponent } from '../pages/advertise/advertise.component';

@NgModule({

  declarations: [
    BreadcrumbsComponent,
    CommingsoonComponent,
    FooterComponent,
    TopheaderComponent,
    BottumheaderComponent,
    LoaderComponent,
    LoginComponent,
    NotfoundComponent,
    PaginationComponent,
    FiltersidebarComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    SellerRegisterComponent,
    SortByComponent,
    TopstacksComponent,
    BestsellersComponent,
    TopRatedComponent,
    LimitedOfferComponent,
    StacksComponent,
    DetailpageComponent,
    RelatedProductsComponent,
    CartListingComponent,
    CheckoutComponent,
    OrdersComponent,
    WishlistComponent,
    TermsofUseComponent,
    PrivacyPolicyComponent,
    GiftCardsComponent,
    RewardsComponent,
    MyProfileComponent,
    SupportsComponent,
    AdvertiseComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MenuModule,
    SplitButtonModule,
    TooltipModule,
    MenubarModule,
    CarouselModule,
    RatingModule,
    GalleriaModule,
    InputNumberModule,
    TabViewModule,
    AccordionModule,
    ListboxModule,
    SliderModule,
    ChipModule,
    ToastModule,
    RadioButtonModule,
    
  ],
  exports: [
    CommonModule,
    TopheaderComponent,
    FooterComponent,
    TopstacksComponent,
    BestsellersComponent,
    TopRatedComponent,
    LimitedOfferComponent,
    StacksComponent,
    RelatedProductsComponent,
    FiltersidebarComponent,
  ],
  providers: []

})
export class SharedModule { }