import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalDocColorsComponent } from './modal-doc-colors.component';

describe('ModalDocColorsComponent', () => {
  let component: ModalDocColorsComponent;
  let fixture: ComponentFixture<ModalDocColorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDocColorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
