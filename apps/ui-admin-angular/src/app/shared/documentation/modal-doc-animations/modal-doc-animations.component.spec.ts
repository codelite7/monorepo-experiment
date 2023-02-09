import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalDocAnimationsComponent } from './modal-doc-animations.component';

describe('ModalDocAnimationsComponent', () => {
  let component: ModalDocAnimationsComponent;
  let fixture: ComponentFixture<ModalDocAnimationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDocAnimationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
