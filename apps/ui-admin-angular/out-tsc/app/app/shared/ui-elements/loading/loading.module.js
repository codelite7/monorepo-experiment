import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingCircleComponent } from './loading-circle/loading-circle.component';
import { LoadingCircleDotComponent } from './loading-circle-dot/loading-circle-dot.component';
import { LoadingCircle2Component } from './loading-circle2/loading-circle2.component';
import { LoadingWaveComponent } from './loading-wave/loading-wave.component';
let LoadingModule = class LoadingModule {
};
LoadingModule = __decorate([
    NgModule({
        declarations: [
            LoadingBarComponent,
            LoadingCircleComponent,
            LoadingCircleDotComponent,
            LoadingCircle2Component,
            LoadingWaveComponent,
        ],
        imports: [CommonModule],
        exports: [
            LoadingBarComponent,
            LoadingCircleComponent,
            LoadingCircleDotComponent,
            LoadingCircle2Component,
            LoadingWaveComponent,
        ],
    })
], LoadingModule);
export { LoadingModule };
//# sourceMappingURL=loading.module.js.map