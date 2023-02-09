import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageUtilitiesComponent } from './image-utilities.component';

describe('ImageUtilitiesComponent', () => {
  let component: ImageUtilitiesComponent;
  let fixture: ComponentFixture<ImageUtilitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUtilitiesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
