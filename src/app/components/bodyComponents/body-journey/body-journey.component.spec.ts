import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyJourneyComponent } from './body-journey.component';

describe('BodyJourneyComponent', () => {
  let component: BodyJourneyComponent;
  let fixture: ComponentFixture<BodyJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyJourneyComponent]
    });
    fixture = TestBed.createComponent(BodyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
