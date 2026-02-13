import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInHeader } from './log-in-header';

describe('LogInHeader', () => {
  let component: LogInHeader;
  let fixture: ComponentFixture<LogInHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
