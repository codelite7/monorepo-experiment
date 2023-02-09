import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalFingerprintComponent } from './modal-fingerprint.component';

describe('ModalFingerprintComponent', () => {
  let component: ModalFingerprintComponent;
  let fixture: ComponentFixture<ModalFingerprintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFingerprintComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
