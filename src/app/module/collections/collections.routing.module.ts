import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { collRoute } from 'src/app/shared/constant/route.const';
import { CollectionsdashComponent } from './collectionsdash/collectionsdash.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';
import { ArtsPhotographyComponent } from './arts-photography/arts-photography.component';
import { BiographiesMemoirsComponent } from './biographies-memoirs/biographies-memoirs.component';
import { ChildrensBooksComponent } from './childrens-books/childrens-books.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { LiteratureFictionComponent } from './literature-fiction/literature-fiction.component';
import { MysterySuspenseComponent } from './mystery-suspense/mystery-suspense.component';
import { SciFiFantasyComponent } from './sci-fi-fantasy/sci-fi-fantasy.component';
import { CollectionComponent } from './collection/collection.component';
import { CurrentBestsellersComponent } from './current-bestsellers/current-bestsellers.component';
import { LimitedTimeOfferComponent } from './limited-time-offer/limited-time-offer.component';
import { TopRatesBookComponent } from './top-rates-book/top-rates-book.component';

const routes: Routes = [
    { path: collRoute.empty, component: CollectionsdashComponent },
    { path: collRoute.arts_photography, component: ArtsPhotographyComponent },
    { path: collRoute.biographies_memoirs, component: BiographiesMemoirsComponent },
    { path: collRoute.childrens_books, component: ChildrensBooksComponent },
    { path: collRoute.cookbook, component: CookbookComponent },
    { path: collRoute.literature_fiction, component: LiteratureFictionComponent },
    { path: collRoute.mystery_suspense, component: MysterySuspenseComponent },
    { path: collRoute.sci_fi_fantasy, component: SciFiFantasyComponent },
    { path: collRoute.current_bestsellers, component: CurrentBestsellersComponent },
    { path: collRoute.limited_time_offer, component: LimitedTimeOfferComponent },
    { path: collRoute.top_rates_book, component: TopRatesBookComponent },
    { path: collRoute.all_collections, component: AllCollectionsComponent },
    { path: collRoute.collection, component: CollectionComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollectionsRoutingModule { }
