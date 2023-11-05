import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCardComponent } from './partners-card.component';

describe('PartnersCardComponent', () => {
  let component: PartnersCardComponent;
  let fixture: ComponentFixture<PartnersCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersCardComponent]
    });
    fixture = TestBed.createComponent(PartnersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
