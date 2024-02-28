import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensBooksComponent } from './childrens-books.component';

describe('ChildrensBooksComponent', () => {
  let component: ChildrensBooksComponent;
  let fixture: ComponentFixture<ChildrensBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrensBooksComponent]
    });
    fixture = TestBed.createComponent(ChildrensBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
