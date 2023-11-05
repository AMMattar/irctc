import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaCardComponent } from './socialmedia-card.component';

describe('SocialmediaCardComponent', () => {
  let component: SocialmediaCardComponent;
  let fixture: ComponentFixture<SocialmediaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialmediaCardComponent]
    });
    fixture = TestBed.createComponent(SocialmediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
