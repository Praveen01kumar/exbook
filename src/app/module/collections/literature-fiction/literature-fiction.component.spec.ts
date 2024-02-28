import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteratureFictionComponent } from './literature-fiction.component';

describe('LiteratureFictionComponent', () => {
  let component: LiteratureFictionComponent;
  let fixture: ComponentFixture<LiteratureFictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiteratureFictionComponent]
    });
    fixture = TestBed.createComponent(LiteratureFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
