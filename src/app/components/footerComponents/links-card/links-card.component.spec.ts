import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCardComponent } from './links-card.component';

describe('LinksCardComponent', () => {
  let component: LinksCardComponent;
  let fixture: ComponentFixture<LinksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksCardComponent]
    });
    fixture = TestBed.createComponent(LinksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
