import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseCardComponent } from './choise-card.component';

describe('ChoiseCardComponent', () => {
  let component: ChoiseCardComponent;
  let fixture: ComponentFixture<ChoiseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiseCardComponent]
    });
    fixture = TestBed.createComponent(ChoiseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
