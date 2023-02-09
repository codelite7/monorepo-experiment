import { Component, OnInit } from '@angular/core';
import { COLORS, GRAYCOLORS, COLORTHEMES, ANIMATE } from '@services/model';
import { FOOTERPOSITION, SIZE, FULLMODE } from '@shared/ui-elements/modal/modal';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss'],
})
export class GeneralModalComponent implements OnInit {
  modalOptions = {
    headerTitle: 'Title',
    headerClose: false,
    closeFloating: false,
    backgroundOverlay: 'dark',
    animated: 'bounceInDown',
    size: null,
    backgroundContainer: null,
    backdropBlur: false,
    paddingHeader: true,
    paddingBody: true,
    paddingFooter: true,
    borderHeader: true,
    borderFooter: true,
    footerPosition: 'center',
    shadow: true,
    clickedOutside: true,
    centered: false,
    fullMode: '',
    timeHide: null,
  };

  colors: string[];

  animate = ANIMATE;

  footerPosition = FOOTERPOSITION;

  size = SIZE;

  fullMode = FULLMODE;

  loadingBody = false;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.colors = [...COLORS, ...COLORTHEMES, ...GRAYCOLORS];

    this.mainNavService.selectedItem('ui-modals', 'ui-general-modal');
    this.titleService.setTitle('General modal - Swarm IO');
  }
}
