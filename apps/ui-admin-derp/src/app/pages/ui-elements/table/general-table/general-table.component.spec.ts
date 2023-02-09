import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralTableComponent } from './general-table.component';

describe('GeneralTableComponent', () => {
  let component: GeneralTableComponent;
  let fixture: ComponentFixture<GeneralTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
