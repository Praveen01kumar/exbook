import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { pageRoute } from './shared/constant/route.const';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { SellerRegisterComponent } from './pages/seller-register/seller-register.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';

const routes: Routes = [
  { path: pageRoute?.empty, component: HomeComponent },
  { path: pageRoute?.login, component: LoginComponent },
  { path: pageRoute?.admin_login, component: AdminLoginComponent },
  { path: pageRoute?.user_register, component: UserRegisterComponent },
  { path: pageRoute?.seller_register, component: SellerRegisterComponent },
  { path: pageRoute?.books, component: DetailpageComponent },
  { path: pageRoute?.categories, loadChildren: () => import('../app/module/collections/collections.module').then(m => m.CollectionsModule) },
  { path: pageRoute?.veiled, component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
