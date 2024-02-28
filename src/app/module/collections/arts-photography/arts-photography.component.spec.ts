import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsPhotographyComponent } from './arts-photography.component';

describe('ArtsPhotographyComponent', () => {
  let component: ArtsPhotographyComponent;
  let fixture: ComponentFixture<ArtsPhotographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtsPhotographyComponent]
    });
    fixture = TestBed.createComponent(ArtsPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
