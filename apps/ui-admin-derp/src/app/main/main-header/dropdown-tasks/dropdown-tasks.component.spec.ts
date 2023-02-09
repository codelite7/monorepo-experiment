import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownTasksComponent } from './dropdown-tasks.component';

describe('DropdownTasksComponent', () => {
  let component: DropdownTasksComponent;
  let fixture: ComponentFixture<DropdownTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownTasksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
