import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMenu } from './contacts-menu';

describe('ContactsMenu', () => {
  let component: ContactsMenu;
  let fixture: ComponentFixture<ContactsMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
