import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownMessagesComponent } from './dropdown-messages.component';

describe('DropdownMessagesComponent', () => {
  let component: DropdownMessagesComponent;
  let fixture: ComponentFixture<DropdownMessagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMessagesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
