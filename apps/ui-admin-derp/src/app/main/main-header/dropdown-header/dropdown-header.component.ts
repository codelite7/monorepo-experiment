import { Component, OnInit, Input, ViewEncapsulation, HostListener, EventEmitter, Output } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'fz-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownHeaderComponent implements OnInit {
  @Input() classBt: string;

  @Input() state: boolean;

  @Output() stateOn = new EventEmitter();

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
