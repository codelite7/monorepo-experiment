import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCounterComponent } from './icon-counter.component';

describe('IconCounterComponent', () => {
  let component: IconCounterComponent;
  let fixture: ComponentFixture<IconCounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconCounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
