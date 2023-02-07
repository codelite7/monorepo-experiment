import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fz-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  @Output() currentTab = new EventEmitter<TabComponent>();

  @Input() color: Colors | ColorTheme | GrayColors = 'primary';

  @Input() position: 'start' | 'end' | 'center' | 'between' | 'around' = 'start';

  @Input() classContent: string;

  @Input() classTab: string;

  @Input() type: '' | 'pills' | 'tabs' = 'tabs';

  @Input() justified = false;

  tabs: TabComponent[] = [];

  constructor(
    public mainService: MainService,
    public colorConfigService: ColorConfigService,
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  pushTab(tab: TabComponent) {
    this.tabs.push(tab);
  }

  /**
   * @author karanhudia
   * @param tab
   */
  selectTab(tab: TabComponent) {
    this.tabs.forEach((theTab) => {
      theTab.active = false;
    });
    tab.active = true;
    this.currentTab.emit(tab);
  }

  tabColorActive(tab) {
    if (tab.active && (this.type === 'pills' || this.type === 'tabs')) {
      const lightText = this.ligthTextTab ? 'text-white' : 'text-dark';
      return this.color ? `bg-${this.color} ${lightText}` : '';
    }
    if (tab.active && this.type !== 'pills' && this.type !== 'tabs') {
      return this.color ? `text-${this.color}` : '';
    }
    return '';
  }

  sanitizerHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  get ligthTextTab() {
    return this.color && this.colorConfigService.isDark(this.color);
  }

  get tabPosition() {
    return this.position ? `justify-content-${this.position}` : '';
  }

  get darkMode() {
    return this.mainService.getDarkTheme() ? true : false;
  }
}
