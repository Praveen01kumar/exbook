import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofUseComponent } from './termsof-use.component';

describe('TermsofUseComponent', () => {
  let component: TermsofUseComponent;
  let fixture: ComponentFixture<TermsofUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsofUseComponent]
    });
    fixture = TestBed.createComponent(TermsofUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
