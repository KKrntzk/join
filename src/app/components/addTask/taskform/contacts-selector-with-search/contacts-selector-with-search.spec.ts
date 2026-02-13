import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSelectorWithSearch } from './contacts-selector-with-search';

describe('ContactsSelectorWithSearch', () => {
  let component: ContactsSelectorWithSearch;
  let fixture: ComponentFixture<ContactsSelectorWithSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsSelectorWithSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsSelectorWithSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
