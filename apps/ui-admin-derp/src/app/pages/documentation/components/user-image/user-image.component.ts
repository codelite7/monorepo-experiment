import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
})
export class UserImageComponent implements OnInit {
  example = `<fz-user-image src="assets/images/user-profile" [widthHeight]="40" state="available"></fz-user-image>`;

  inputs = [
    {
      attribute: 'src',
      description: 'Src image',
      default: '',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'alt',
      description: 'Alt image',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'imgClass',
      description: 'Class image',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'state',
      description: 'State user',
      default: '',
      type: 'available | absent | occupied | offline',
      required: false,
      actions: null,
    },
    {
      attribute: 'ext',
      description: 'Extension image',
      default: 'jpg',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'disabledWebpAuto',
      description: 'Disabled webp extension',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-user-image');
  }
}
