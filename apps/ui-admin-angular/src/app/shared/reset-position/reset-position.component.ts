import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PositionService } from '@services/shared/position.service';
import { first } from 'rxjs/operators';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { ModalDialogComponent } from '@shared/ui-elements/modal/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-reset-position',
  templateUrl: './reset-position.component.html',
  styleUrls: ['./reset-position.component.scss'],
})
export class ResetPositionComponent implements OnInit {
  @ViewChild('resetPositionModal') resetPositionModal: ModalDialogComponent;
  // id of the thing to reset position for
  @Input() id: string;
  @Input() name: string;
  @Input() type: string;

  // form
  public resetPositionForm: FormGroup;

  // default state
  reset = {
    timestamp: 0,
  };

  constructor(
    private fb: FormBuilder,
    private positionService: PositionService,
    private notificationService: NotificationService,
    private loadingService: LoadingGeneralService
  ) {}

  ngOnInit(): void {
    this.resetPositionForm = this.fb.group({
      timestamp: [this.reset.timestamp, [Validators.required, Validators.min(0)]],
    });
  }
  get timestamp(): AbstractControl | null {
    return this.resetPositionForm.get('timestamp');
  }
  resetPosition(): void {
    try {
      this.loadingService.setOptions({}).show();
      this.positionService
        .resetPosition(this.id, this.resetPositionForm.get('timestamp')?.value, this.type)
        .pipe(first())
        .subscribe(
          () => {
            this.notificationService.success('Position has been reset', 'Success!');
            this.loadingService.hide();
          },
          (error) => {
            this.notificationService.error('Please try again', 'Failed to reset position');
            this.loadingService.hide();
          }
        );
    } catch {
      this.notificationService.error('Refresh the page and try again', 'Error resetting position');
    }
  }

  show(): void {
    this.resetPositionModal.show();
  }
}
