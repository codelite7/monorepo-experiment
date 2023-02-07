import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FloatingCardComponent } from './floating-card.component';

describe('FloatingCardComponent', () => {
  let component: FloatingCardComponent;
  let fixture: ComponentFixture<FloatingCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
