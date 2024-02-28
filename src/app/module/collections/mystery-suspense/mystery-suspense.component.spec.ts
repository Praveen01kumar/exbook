import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysterySuspenseComponent } from './mystery-suspense.component';

describe('MysterySuspenseComponent', () => {
  let component: MysterySuspenseComponent;
  let fixture: ComponentFixture<MysterySuspenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysterySuspenseComponent]
    });
    fixture = TestBed.createComponent(MysterySuspenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
