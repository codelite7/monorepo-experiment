import { Component, OnInit, ViewEncapsulation, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MainService } from '@main/main.service';
import { TipPlacement } from 'src/app/directives/tip.directive';

@Component({
  selector: 'fz-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {
  @Input() classBt: string;

  @Input() classContainer = 'd-flex flex-column';

  @Input() direction: TipPlacement = 'auto';

  @Input() trigger = 'click';

  @Input() animation: 'scale' | 'perspective' | 'shift-toward' | 'shift-away' = 'shift-away';

  @Input() theme: 'light' | 'dark';

  @Input() hoverItem: 'color' | 'gray' = 'color';

  @Input() arrow = true;

  @Input() maxWidth: number | 'none';

  @Input() zIndex: number;

  @Input() show = false;

  @Input() state: boolean;

  @Input() closeClickOutside = true;

  @Input() appendTo: any;

  @Input() contentPadding0 = false;

  @Input() minWidth: number;

  @Output() stateOn = new EventEmitter();

  constructor(public mainService: MainService, private elementRef: ElementRef) {}

  ngOnInit(): void {}

  get cTheme() {
    let color;

    if (this.theme) {
      color = this.theme;
    }
    if (!this.theme) {
      color = this.mainService.getDarkTheme() ? 'dark' : 'light';
    }

    this.elementRef.nativeElement.style.setProperty('--dropdown-arrow-color', `var(--${color})`);
    if (this.mainService.getDarkTheme()) {
      this.elementRef.nativeElement.style.setProperty('--dropdown-shadow', `0.9`);
    } else {
      this.elementRef.nativeElement.style.setProperty('--dropdown-shadow', `0.28`);
    }

    return color;
  }
}
