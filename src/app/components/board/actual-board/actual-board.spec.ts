import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualBoard } from './actual-board';

describe('ActualBoard', () => {
  let component: ActualBoard;
  let fixture: ComponentFixture<ActualBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
