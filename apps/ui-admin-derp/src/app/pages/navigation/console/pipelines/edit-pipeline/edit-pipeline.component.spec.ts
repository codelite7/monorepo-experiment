import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPipelineComponent } from './edit-pipeline.component';

describe('EditPipelineComponent', () => {
  let component: EditPipelineComponent;
  let fixture: ComponentFixture<EditPipelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditPipelineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
