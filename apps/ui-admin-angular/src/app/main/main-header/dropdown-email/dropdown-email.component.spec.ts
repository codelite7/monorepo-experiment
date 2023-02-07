import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownEmailComponent } from './dropdown-email.component';

describe('DropdownEmailComponent', () => {
  let component: DropdownEmailComponent;
  let fixture: ComponentFixture<DropdownEmailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownEmailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
