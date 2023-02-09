import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanelTableComponent } from './panel-table.component';

describe('PanelTableComponent', () => {
  let component: PanelTableComponent;
  let fixture: ComponentFixture<PanelTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PanelTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
