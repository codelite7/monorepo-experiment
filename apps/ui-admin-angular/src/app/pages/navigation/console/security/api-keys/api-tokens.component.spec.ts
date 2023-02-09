import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiTokensComponent } from './api-tokens.component';

describe('ApiTokensComponent', () => {
  let component: ApiTokensComponent;
  let fixture: ComponentFixture<ApiTokensComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTokensComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
