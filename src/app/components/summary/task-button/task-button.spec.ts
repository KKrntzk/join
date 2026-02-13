import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskButton } from './task-button';

describe('TaskButton', () => {
  let component: TaskButton;
  let fixture: ComponentFixture<TaskButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
