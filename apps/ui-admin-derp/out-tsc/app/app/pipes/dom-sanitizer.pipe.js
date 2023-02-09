import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
let DomSanitizerPipe = class DomSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // @author https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
DomSanitizerPipe = __decorate([
    Pipe({
        name: 'fzSanitizer',
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], DomSanitizerPipe);
export { DomSanitizerPipe };
//# sourceMappingURL=dom-sanitizer.pipe.js.map