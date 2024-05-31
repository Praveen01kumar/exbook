import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { propRoute } from 'src/app/shared/constant/route.const';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { ManageAddressesComponent } from './manage-addresses/manage-addresses.component';
import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { MyReviewsRatingsComponent } from './my-reviews-ratings/my-reviews-ratings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PANCardInformationComponent } from './pancard-information/pancard-information.component';
import { SavedUPIComponent } from './saved-upi/saved-upi.component';
import { SavedCardsComponent } from './saved-cards/saved-cards.component';
import { WishlistComponent } from 'src/app/pages/wishlist/wishlist.component';
import { OrdersComponent } from 'src/app/pages/orders/orders.component';

const routes: Routes = [
    {
        path: propRoute.empty, component: MyProfileComponent,
        children: [
            { path: propRoute.empty, component: ProfileInformationComponent },
            { path: propRoute.giftcards, component: GiftCardsComponent },
            { path: propRoute.manageaddresses, component: ManageAddressesComponent },
            { path: propRoute.mycoupons, component: MyCouponsComponent },
            { path: propRoute.myreviewsratings, component: MyReviewsRatingsComponent },
            { path: propRoute.notifications, component: NotificationsComponent },
            { path: propRoute.pancardinformation, component: PANCardInformationComponent },
            { path: propRoute.savedupi, component: SavedUPIComponent },
            { path: propRoute.savedcards, component: SavedCardsComponent },
            { path: propRoute.wishlist, component: WishlistComponent },
            { path: propRoute.order, component: OrdersComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
