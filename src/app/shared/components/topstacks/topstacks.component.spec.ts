import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstacksComponent } from './topstacks.component';

describe('TopstacksComponent', () => {
  let component: TopstacksComponent;
  let fixture: ComponentFixture<TopstacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopstacksComponent]
    });
    fixture = TestBed.createComponent(TopstacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
