import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewEncapsulation, } from '@angular/core';
import { FloatingCardService } from './floating-card.service';
import { MainService } from '../main.service';
let FloatingCardComponent = class FloatingCardComponent {
    constructor(mainService, floatingCardService, componentFactoryResolver) {
        this.mainService = mainService;
        this.floatingCardService = floatingCardService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.contOpen = 0;
    }
    ngOnInit() {
        this.contOpen = 0;
        this.floatingCardService.loadEmit.subscribe((res) => this.load(res.component, res === null || res === void 0 ? void 0 : res.params));
        this.floatingCardService.stateEmit.subscribe((res) => this.contOpen++);
    }
    /**
     * Load component
     *
     * @param {*} component
     * @param {*} [params=[]]
     */
    load(component, params = []) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        params.forEach((element) => {
            ref.instance[element.param] = element.value;
        });
    }
};
__decorate([
    ViewChild('contentFC', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], FloatingCardComponent.prototype, "viewContainerRef", void 0);
FloatingCardComponent = __decorate([
    Component({
        selector: 'fz-floating-card',
        templateUrl: './floating-card.component.html',
        styleUrls: ['./floating-card.component.scss'],
        encapsulation: ViewEncapsulation.None,
        animations: [],
    }),
    __metadata("design:paramtypes", [MainService,
        FloatingCardService,
        ComponentFactoryResolver])
], FloatingCardComponent);
export { FloatingCardComponent };
//# sourceMappingURL=floating-card.component.js.map