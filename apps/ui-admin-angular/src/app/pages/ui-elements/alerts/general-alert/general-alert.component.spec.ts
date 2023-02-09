import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralAlertComponent } from './general-alert.component';

describe('GeneralAlertComponent', () => {
  let component: GeneralAlertComponent;
  let fixture: ComponentFixture<GeneralAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
