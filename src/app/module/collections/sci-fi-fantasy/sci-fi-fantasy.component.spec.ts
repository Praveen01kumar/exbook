import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiFantasyComponent } from './sci-fi-fantasy.component';

describe('SciFiFantasyComponent', () => {
  let component: SciFiFantasyComponent;
  let fixture: ComponentFixture<SciFiFantasyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciFiFantasyComponent]
    });
    fixture = TestBed.createComponent(SciFiFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
