import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInLogo } from './log-in-logo';

describe('LogInLogo', () => {
  let component: LogInLogo;
  let fixture: ComponentFixture<LogInLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
