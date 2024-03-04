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
import { CurrentBestsellersComponent } from './components/current-bestsellers/current-bestsellers.component';
import { TopRatesBookComponent } from './components/top-rates-book/top-rates-book.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { LimitedTimeOfferComponent } from './components/limited-time-offer/limited-time-offer.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { DetailpageComponent } from '../pages/detailpage/detailpage.component';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { RelatedProductsComponent } from './components/related-products/related-products.component';

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
    CurrentBestsellersComponent,
    TopRatesBookComponent,
    LimitedTimeOfferComponent,
    StacksComponent,
    DetailpageComponent,
    RelatedProductsComponent,
    

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
    TabViewModule

  ],
  exports: [
    CommonModule,
    TopheaderComponent,
    FooterComponent,
    TopstacksComponent,
    CurrentBestsellersComponent,
    TopRatesBookComponent,
    LimitedTimeOfferComponent,
    StacksComponent,
    RelatedProductsComponent
  ],
  providers: []

})
export class SharedModule { }