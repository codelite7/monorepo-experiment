import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Component({
  selector: 'fz-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss'],
})
export class MessageAlertComponent implements OnInit {
  @Input() type: 'error' | 'success' | 'warning';

  @Input() background: Colors | ColorTheme | GrayColors;

  @Input() iconError = 'fas fa-times';

  @Input() iconSuccess = 'fas fa-check';

  @Input() iconWarning = 'fas fa-exclamation';

  @Input() classIcon = 'd-flex justify-content-center';

  @Input() classText = 'd-flex justify-content-center flex-column text-center';

  @Input() timeHideSuccess: number;

  @Input() timeHideWarning: number;

  @Input() timeHideError: number;

  @ViewChild('title') titleEl: ElementRef;

  @ViewChild('description') descriptionEl: ElementRef;

  @ViewChild('buttons') buttonsEl: ElementRef;

  @Output() onClose = new EventEmitter();

  status = true;

  showTitle = true;

  showDescription = true;

  showButtons = true;

  constructor(public mainService: MainService, public colorConfigService: ColorConfigService) {}

  ngOnInit(): void {
    this.show();
  }

  ngAfterContentChecked(): void {
    if (this.titleEl?.nativeElement) {
      this.showTitle = this.titleEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.descriptionEl?.nativeElement) {
      this.showDescription = this.descriptionEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.buttonsEl?.nativeElement) {
      this.showButtons = this.buttonsEl.nativeElement.childNodes.length > 0 ? true : false;
    }
  }

  show() {
    this.status = true;
    let time: number = 0;
    if (this.type === 'error' && this.timeHideError) {
      time = this.timeHideError;
    }
    if (this.type === 'success' && this.timeHideSuccess) {
      time = this.timeHideSuccess;
    }
    if (this.type === 'warning' && this.timeHideWarning) {
      time = this.timeHideWarning;
    }
    if (time) {
      setTimeout(() => this.hide(), time);
    }
  }

  hide() {
    this.status = false;
    this.onClose.emit(true);
  }

  get messageBackground() {
    return this.cBackground ? `bg-${this.cBackground}` : '';
  }

  get ligthTextContent() {
    return this.cBackground && this.colorConfigService.isDark(this.cBackground);
  }

  get cBackground() {
    if (this.background) {
      return this.background;
    }
    return this.mainService.getDarkTheme() ? 'dark' : '';
  }
}
