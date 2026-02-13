import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainTitle } from './header-main-title';

describe('HeaderMainTitle', () => {
  let component: HeaderMainTitle;
  let fixture: ComponentFixture<HeaderMainTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMainTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
