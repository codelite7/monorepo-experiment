import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollbarComponent } from './scrollbar.component';

describe('ScrollbarComponent', () => {
  let component: ScrollbarComponent;
  let fixture: ComponentFixture<ScrollbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
