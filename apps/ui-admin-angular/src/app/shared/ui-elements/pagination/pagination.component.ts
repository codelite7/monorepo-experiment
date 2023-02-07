import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() active = 1;

  @Input() rows: number;

  @Input() perPage = 5;

  @Input() circle = false;

  @Input() descPagination = 'Pagination';

  @Input() textBtPrevious = 'Previous';

  @Input() textBtNext = 'Next';

  @Input() iconBtPrevious = 'fas fa-chevron-left';

  @Input() iconBtNext = 'fas fa-chevron-right';

  @Input() actionsNextPrev = true;

  @Input() actionNumbers = true;

  @Input() textBtNextPrev = true;

  @Input() position: 'start' | 'end' | 'center' | 'between' | 'around';

  @Input() size: 'large' | 'small';

  @Input() color: Colors | ColorTheme = 'primary';

  @Input() classPagination: string;

  @Output() pageChange = new EventEmitter();

  pages: number[] = [];

  firstPageAction = false;

  lastPageAction = false;

  constructor(public mainService: MainService) {}

  ngOnInit() {
    this.mountPages();
  }

  increment() {
    this.active++;
    this.mountPages();
  }

  decrement() {
    this.active--;
    this.mountPages();
  }

  activePage(page) {
    this.active = page;
    this.mountPages();
  }

  get numPages() {
    return Math.ceil(this.rows / this.perPage);
  }

  get positionNav() {
    return this.position ? `justify-content-${this.position}` : '';
  }

  /**
   * Mount pages
   */
  private mountPages() {
    const page = Array(this.numPages)
      .fill(0)
      .map((x, i) => i + 1);

    let start = 0;
    let end = this.perPage;

    this.pageChange.emit(this.active);

    if (this.perPage > 0 && this.numPages > this.perPage) {
      [start, end] = this.rotation();
    }

    this.pages = page.slice(start, end);

    this.firstPageAction = !this.pages.find((element) => element === 1);
    this.lastPageAction = !this.pages.find((element) => element === this.numPages);
  }

  /**
   * @author ng-bootstrap
   * @link https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts
   */
  private rotation(): [number, number] {
    let start = 0;
    let end = this.numPages;
    const leftOffset = Math.floor(this.perPage / 2);
    const rightOffset = this.perPage % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (this.active <= leftOffset) {
      end = this.perPage;
    } else if (this.numPages - this.active < leftOffset) {
      start = this.numPages - this.perPage;
    } else {
      start = this.active - leftOffset - 1;
      end = this.active + rightOffset;
    }
    return [start, end];
  }
}
