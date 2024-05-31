import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PANCardInformationComponent } from './pancard-information.component';

describe('PANCardInformationComponent', () => {
  let component: PANCardInformationComponent;
  let fixture: ComponentFixture<PANCardInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PANCardInformationComponent]
    });
    fixture = TestBed.createComponent(PANCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
