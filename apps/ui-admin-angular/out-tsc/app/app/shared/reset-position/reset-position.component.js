import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PositionService, PositionType } from '@services/shared/position.service';
import { first } from 'rxjs/operators';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { ModalDialogComponent } from '@shared/ui-elements/modal/modal-dialog/modal-dialog.component';
let ResetPositionComponent = class ResetPositionComponent {
    constructor(fb, positionService, notificationService, loadingService) {
        this.fb = fb;
        this.positionService = positionService;
        this.notificationService = notificationService;
        this.loadingService = loadingService;
        // default state
        this.reset = {
            type: PositionType.DeliverAll,
            timeDeltaDigit: 1,
            timeDeltaUnit: 'd',
            timestamp: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString(),
            sequenceNumber: 0,
        };
        this.timestampValidator = (c) => {
            const value = c.value;
            if (value && typeof value === 'string') {
                const parsedValue = this.positionService.parseTimestamp(value);
                if (parsedValue === null) {
                    return { timestampInvalid: true };
                }
            }
            return null;
        };
    }
    get positionType() {
        return PositionType;
    }
    get type() {
        return this.resetPositionForm.get('type');
    }
    get timeDeltaDigit() {
        return this.resetPositionForm.get('timeDeltaDigit');
    }
    get timeDeltaUnit() {
        return this.resetPositionForm.get('timeDeltaUnit');
    }
    get timestamp() {
        return this.resetPositionForm.get('timestamp');
    }
    get sequenceNumber() {
        return this.resetPositionForm.get('sequenceNumber');
    }
    ngOnInit() {
        this.resetPositionForm = this.fb.group({
            type: [this.reset.type],
            timeDeltaDigit: [this.reset.timeDeltaDigit, [Validators.required, Validators.min(1)]],
            timeDeltaUnit: [this.reset.timeDeltaUnit],
            timestamp: [this.reset.timestamp, [Validators.required, this.timestampValidator]],
            sequenceNumber: [this.reset.sequenceNumber, [Validators.required, Validators.min(0)]],
        });
    }
    resetPosition() {
        try {
            const request = this.getResetPositionRequest();
            this.loadingService.setOptions({}).show();
            this.positionService
                .resetPosition(this.id, request)
                .pipe(first())
                .subscribe(() => {
                this.notificationService.success('Position has been reset', 'Success!');
                this.loadingService.hide();
            }, (error) => {
                this.notificationService.error('Please try again', 'Failed to reset position');
                this.loadingService.hide();
            });
        }
        catch (_a) {
            this.notificationService.error('Refresh the page and try again', 'Error resetting position');
        }
    }
    getResetPositionRequest() {
        switch (this.resetPositionForm.get('type').value) {
            case PositionType.DeliverAll:
                return {
                    type: PositionType.DeliverAll,
                    value: '',
                };
            case PositionType.SequenceNumber:
                return {
                    type: PositionType.SequenceNumber,
                    value: `${this.resetPositionForm.get('sequenceNumber').value}`,
                };
            case PositionType.Time:
                return {
                    type: PositionType.Time,
                    value: this.resetPositionForm.get('timestamp').value,
                };
            case PositionType.TimeDelta:
                let digit = this.resetPositionForm.get('timeDeltaDigit').value;
                let unit = this.resetPositionForm.get('timeDeltaUnit').value;
                switch (unit) {
                    case 'd':
                        digit = digit * 24;
                        unit = 'h';
                        break;
                    case 'w':
                        digit = digit * 24 * 7;
                        unit = 'h';
                        break;
                }
                return {
                    type: PositionType.TimeDelta,
                    value: `${digit}${unit}`,
                };
            default:
                throw new Error('Invalid position type');
        }
    }
    show() {
        this.resetPositionModal.show();
    }
};
__decorate([
    ViewChild('resetPositionModal'),
    __metadata("design:type", ModalDialogComponent)
], ResetPositionComponent.prototype, "resetPositionModal", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ResetPositionComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ResetPositionComponent.prototype, "name", void 0);
ResetPositionComponent = __decorate([
    Component({
        selector: 'app-reset-position',
        templateUrl: './reset-position.component.html',
        styleUrls: ['./reset-position.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        PositionService,
        NotificationService,
        LoadingGeneralService])
], ResetPositionComponent);
export { ResetPositionComponent };
//# sourceMappingURL=reset-position.component.js.map