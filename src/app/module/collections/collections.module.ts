import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections.routing.module';
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

@NgModule({
  declarations: [
    CollectionsdashComponent,
    AllCollectionsComponent,
    ArtsPhotographyComponent,
    BiographiesMemoirsComponent,
    ChildrensBooksComponent,
    CookbookComponent,
    LiteratureFictionComponent,
    MysterySuspenseComponent,
    SciFiFantasyComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CollectionsModule { }
