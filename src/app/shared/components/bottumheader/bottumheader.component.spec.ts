import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottumheaderComponent } from './bottumheader.component';

describe('BottumheaderComponent', () => {
  let component: BottumheaderComponent;
  let fixture: ComponentFixture<BottumheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottumheaderComponent]
    });
    fixture = TestBed.createComponent(BottumheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
