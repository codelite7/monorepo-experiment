import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutputsSelectorComponent } from './outputs-selector.component';

describe('OutputsSelectorComponent', () => {
  let component: OutputsSelectorComponent;
  let fixture: ComponentFixture<OutputsSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OutputsSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
