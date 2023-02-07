import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocslinkComponent } from './docslink.component';

describe('DocslinkComponent', () => {
  let component: DocslinkComponent;
  let fixture: ComponentFixture<DocslinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DocslinkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
