import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BrandComponent implements OnInit {
  @Input() tag = 'a';

  @Input() large = false;

  @Input() exLarge = false;

  @Input() classBrand: string;

  @Input() text = 'ADMIN';

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
