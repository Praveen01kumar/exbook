import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiesMemoirsComponent } from './biographies-memoirs.component';

describe('BiographiesMemoirsComponent', () => {
  let component: BiographiesMemoirsComponent;
  let fixture: ComponentFixture<BiographiesMemoirsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiographiesMemoirsComponent]
    });
    fixture = TestBed.createComponent(BiographiesMemoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
