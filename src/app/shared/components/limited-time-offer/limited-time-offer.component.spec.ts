import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedTimeOfferComponent } from './limited-time-offer.component';

describe('LimitedTimeOfferComponent', () => {
  let component: LimitedTimeOfferComponent;
  let fixture: ComponentFixture<LimitedTimeOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitedTimeOfferComponent]
    });
    fixture = TestBed.createComponent(LimitedTimeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
