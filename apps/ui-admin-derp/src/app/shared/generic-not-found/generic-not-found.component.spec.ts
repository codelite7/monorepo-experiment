import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericNotFoundComponent } from './generic-not-found.component';

describe('GenericNotFoundComponent', () => {
  let component: GenericNotFoundComponent;
  let fixture: ComponentFixture<GenericNotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GenericNotFoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
