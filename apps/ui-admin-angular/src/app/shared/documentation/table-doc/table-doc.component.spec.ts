import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableDocComponent } from './table-doc.component';

describe('TableDocComponent', () => {
  let component: TableDocComponent;
  let fixture: ComponentFixture<TableDocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableDocComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
