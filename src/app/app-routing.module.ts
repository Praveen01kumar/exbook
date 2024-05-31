import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { pageRoute } from './shared/constant/route.const';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { DetailpageComponent } from './pages/detail-page/detail-page.component';
import { CartListingComponent } from './pages/cart-listing/cart-listing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { TermsofUseComponent } from './pages/termsof-use/termsof-use.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SupportsComponent } from './pages/supports/supports.component';
import { AdvertiseComponent } from './pages/advertise/advertise.component';
import { CollectionComponent } from './module/collections/collection/collection.component';

const routes: Routes = [
  { path: pageRoute?.empty, component: HomeComponent },
  { path: pageRoute?.login, component: LoginComponent },
  { path: pageRoute?.admin_login, component: AdminLoginComponent },
  { path: pageRoute?.user_register, component: UserRegisterComponent },
  { path: pageRoute?.seller_register, component: SellerRegisterComponent },
  { path: pageRoute?.books_id, component: DetailpageComponent },
  { path: pageRoute?.categories, loadChildren: () => import('../app/module/collections/collections.module').then(m => m.CollectionsModule) },
  { path: pageRoute?.cartlist, component: CartListingComponent },
  { path: pageRoute?.checkout, component: CheckoutComponent },
  { path: pageRoute?.orders, component: OrdersComponent },
  { path: pageRoute?.wishlist, component: WishlistComponent },
  { path: pageRoute?.termsofuse, component: TermsofUseComponent },
  { path: pageRoute?.privacypolicy, component: PrivacyPolicyComponent },
  { path: pageRoute?.myprofile, loadChildren: () => import('../app/module/profile/profile.module').then(m => m.ProfileModule) },
  { path: pageRoute?.supports, component: SupportsComponent },
  { path: pageRoute?.advertise, component: AdvertiseComponent },
  { path: pageRoute?.collection, component: CollectionComponent },
  { path: pageRoute?.veiled, component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
