import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsInfo } from './contacts-info';

describe('ContactsInfo', () => {
  let component: ContactsInfo;
  let fixture: ComponentFixture<ContactsInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
