import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let DependencyIsPipelinePipe = class DependencyIsPipelinePipe {
    transform(dependencies, ...args) {
        return dependencies === null || dependencies === void 0 ? void 0 : dependencies.filter((dependency) => dependency.id.startsWith('pipeline'));
    }
};
DependencyIsPipelinePipe = __decorate([
    Pipe({
        name: 'dependencyIsPipeline',
    })
], DependencyIsPipelinePipe);
export { DependencyIsPipelinePipe };
//# sourceMappingURL=dependency-is-pipeline.pipe.js.map