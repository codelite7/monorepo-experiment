import { Component, OnInit, Input } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { ExpansedHeight2 } from 'src/app/animation';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Component({
  selector: 'fz-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [ExpansedHeight2('400ms')],
})
export class AccordionItemComponent implements OnInit {
  @Input() iconOpen = 'fas fa-angle-down';

  @Input() iconClose = 'fas fa-angle-up';

  @Input() iconStatus = true;

  @Input() class = 'd-flex justify-content-between';

  @Input() padding = true;

  @Input() color: Colors | ColorTheme | GrayColors | 'transparent';

  @Input() disabled = false;

  @Input() marginTopOpen = true;

  @Input() marginBottomOpen = true;

  @Input() shadowBox = true;

  @Input() classBox: string;

  @Input() classContent: string;

  @Input() paddingContent = true;

  @Input() status = false;

  state = 'hide';

  constructor(public mainService: MainService, public colorConfigService: ColorConfigService) {}

  ngOnInit(): void {
    if (this.status) {
      this.state = !this.status ? 'hide' : 'show';
    }
  }

  colapse() {
    if (!this.disabled) {
      this.state = this.status ? 'hide' : 'show';
      this.status = !this.status;
    }
  }

  get ligthTextContent() {
    return (
      (this.cColor && this.colorConfigService.isDark(this.cColor)) ||
      (this.cColor === '' && this.mainService.getDarkTheme())
    );
  }

  get accordionColor() {
    return this.cColor ? `bg-${this.cColor}` : '';
  }

  get cColor(): any {
    if (this.color) {
      return this.color === 'transparent' ? '' : this.color;
    }
    return this.mainService.getDarkTheme() ? 'dark' : 'white';
  }
}
