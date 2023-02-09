import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    // @author https://stackblitz.com/edit/angular-filter-list-of-items?file=src%2Fapp%2Ffilter.pipe.ts
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        return items.filter((item) => {
            return Object.keys(item).some((key) => {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'fzFilter',
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map