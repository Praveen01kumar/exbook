import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections.routing.module';
import { CollectionsdashComponent } from './collectionsdash/collectionsdash.component';
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
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    CollectionsdashComponent,
    ArtsPhotographyComponent,
    BiographiesMemoirsComponent,
    ChildrensBooksComponent,
    CookbookComponent,
    LiteratureFictionComponent,
    MysterySuspenseComponent,
    SciFiFantasyComponent,
    CollectionComponent,
    CurrentBestsellersComponent,
    LimitedTimeOfferComponent,
    TopRatesBookComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: []
})
export class CollectionsModule { }
