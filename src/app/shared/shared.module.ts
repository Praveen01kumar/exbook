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
    SortByComponent
  ],
    imports: [CommonModule],
    exports: [CommonModule],
    providers: []

})
export class SharedModule { }