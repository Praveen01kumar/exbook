import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsdashComponent } from './collectionsdash.component';

describe('CollectionsdashComponent', () => {
  let component: CollectionsdashComponent;
  let fixture: ComponentFixture<CollectionsdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsdashComponent]
    });
    fixture = TestBed.createComponent(CollectionsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
