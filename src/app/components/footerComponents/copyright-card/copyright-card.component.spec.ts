import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightCardComponent } from './copyright-card.component';

describe('CopyrightCardComponent', () => {
  let component: CopyrightCardComponent;
  let fixture: ComponentFixture<CopyrightCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyrightCardComponent]
    });
    fixture = TestBed.createComponent(CopyrightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
