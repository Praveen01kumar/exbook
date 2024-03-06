import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatesBookComponent } from './top-rates-book.component';

describe('TopRatesBookComponent', () => {
  let component: TopRatesBookComponent;
  let fixture: ComponentFixture<TopRatesBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatesBookComponent]
    });
    fixture = TestBed.createComponent(TopRatesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
