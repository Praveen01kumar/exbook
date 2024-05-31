import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile.routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { ManageAddressesComponent } from './manage-addresses/manage-addresses.component';
import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { MyReviewsRatingsComponent } from './my-reviews-ratings/my-reviews-ratings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PANCardInformationComponent } from './pancard-information/pancard-information.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { SavedCardsComponent } from './saved-cards/saved-cards.component';
import { SavedUPIComponent } from './saved-upi/saved-upi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    MyProfileComponent,
    GiftCardsComponent,
    ManageAddressesComponent,
    MyCouponsComponent,
    MyReviewsRatingsComponent,
    NotificationsComponent,
    PANCardInformationComponent,
    ProfileInformationComponent,
    SavedCardsComponent,
    SavedUPIComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DropdownModule,
    MenuModule,
    ToastModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: []
})
export class ProfileModule { }
