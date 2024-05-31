import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewsRatingsComponent } from './my-reviews-ratings.component';

describe('MyReviewsRatingsComponent', () => {
  let component: MyReviewsRatingsComponent;
  let fixture: ComponentFixture<MyReviewsRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReviewsRatingsComponent]
    });
    fixture = TestBed.createComponent(MyReviewsRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
