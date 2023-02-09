import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss'],
})
export class FocusComponent implements OnInit {
  example = `<input fzFocus focusState="true" type="text" placeholder="Test">`;

  inputs = [
    {
      attribute: 'focusState',
      description: 'Focus element',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  outputs = [{ attribute: 'onFocus', description: 'Focus state', type: 'boolean' }];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-directives-focus');
  }
}
