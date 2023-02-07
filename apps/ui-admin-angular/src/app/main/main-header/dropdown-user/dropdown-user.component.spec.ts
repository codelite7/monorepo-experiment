import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownUserComponent } from './dropdown-user.component';

describe('DropdownUserComponent', () => {
  let component: DropdownUserComponent;
  let fixture: ComponentFixture<DropdownUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
