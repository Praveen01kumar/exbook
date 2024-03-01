import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBestsellersComponent } from './current-bestsellers.component';

describe('CurrentBestsellersComponent', () => {
  let component: CurrentBestsellersComponent;
  let fixture: ComponentFixture<CurrentBestsellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentBestsellersComponent]
    });
    fixture = TestBed.createComponent(CurrentBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
