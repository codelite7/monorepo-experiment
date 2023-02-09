import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomSanitizerComponent } from './dom-sanitizer.component';

describe('DomSanitizerComponent', () => {
  let component: DomSanitizerComponent;
  let fixture: ComponentFixture<DomSanitizerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DomSanitizerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
