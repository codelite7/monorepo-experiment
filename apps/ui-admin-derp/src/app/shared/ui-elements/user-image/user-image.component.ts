import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
})
export class UserImageComponent implements OnInit {
  @Input() src: string;

  @Input() alt: string;

  @Input() widthHeight: number;

  @Input() imgClass: string;

  @Input() ext = 'jpg';

  @Input() disabledWebpAuto = false;

  @Input() state: 'available' | 'absent' | 'occupied' | 'offline';

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  get srcC() {
    if (this.disabledWebpAuto) {
      return `${this.src}.${this.ext}`;
    }
    return this.mainService.webpSupport ? `${this.src}.webp` : `${this.src}.${this.ext}`;
  }
}
