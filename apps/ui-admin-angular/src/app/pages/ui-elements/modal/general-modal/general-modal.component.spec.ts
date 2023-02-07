import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralModalComponent } from './general-modal.component';

describe('GeneralModalComponent', () => {
  let component: GeneralModalComponent;
  let fixture: ComponentFixture<GeneralModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
