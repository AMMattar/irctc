import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForumComponent } from './header-forum.component';

describe('HeaderForumComponent', () => {
  let component: HeaderForumComponent;
  let fixture: ComponentFixture<HeaderForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderForumComponent]
    });
    fixture = TestBed.createComponent(HeaderForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
