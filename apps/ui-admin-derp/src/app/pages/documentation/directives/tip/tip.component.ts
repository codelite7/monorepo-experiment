import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
})
export class TipComponent implements OnInit {
  example = `<button fzButton color="primary" fzTip content="Tooltip message test">Hover tooltip</button>`;

  example2 = `/**
* content  tippy.js
*
* @type {string}
*/
@Input() content: string;

/**
* placement  tippy.js
*
* @type {TipPlacement}
*/
@Input() placement: TipPlacement;

/**
* trigger  tippy.js
*
* @type {string}
*/
@Input() trigger: string;

/**
* allowHTML  tippy.js
*/
@Input() allowHTML = false;

/**
* animation  tippy.js
*
* @type {string}
*/
@Input() animation: string;

/**
* arrow  tippy.js
*
* @type {(string | boolean)}
*/
@Input() arrow: string | boolean = true;

/**
* delay  tippy.js
*
* @type {(number | Array<any>)}
*/
@Input() delay: number | Array<any>;

/**
* Duration  tippy.js
*
* @type {(number | Array<any>)}
*/
@Input() duration: number | Array<any>;

/**
* FollowCursor  tippy.js
*
* @type {TipFollowCursor}
*/
@Input() followCursor: TipFollowCursor;

/**
* HideOnClick  tippy.js
*
* @type {(boolean | 'toggle')}
*/
@Input() hideOnClick: boolean | 'toggle' = true;

/**
* interactiveDebounce  tippy.js
*
* @type {number}
*/
@Input() interactiveDebounce: number;

/**
* maxWidth  tippy.js
*
* @type {(number | 'none')}
*/
@Input() maxWidth: number | 'none';

/**
* moveTransition  tippy.js
*
* @type {string}
*/
@Input() moveTransition: string;

/**
* offset  tippy.js
*
* @type {Array<number>}
*/
@Input() offset: Array<number>;

/**
* touch  tippy.js
*
* @type {(boolean | string | Array<any>)}
*/
@Input() touch: boolean | string | Array<any> = true;

/**
* zIndex  tippy.js
*
* @type {number}
*/
@Input() zIndex: number;

/**
* theme tippy.js
*/
@Input() theme = 'tippy-theme';

/**
* role  tippy.js
*
* @type {string}
*/
@Input() role: string;

/**
* interactiveBorder tippy.js
*
* @type {number}
*/
@Input() interactiveBorder: number;

/**
* interactive tip tippy.js
*
* @type {boolean}
*/
@Input() interactive: boolean;

/**
* inertia tippy.js
*
* @type {boolean}
*/
@Input() inertia: boolean;

/**
* aria tippy.js
*
* @type {object}
*/
@Input() aria: object;

/**
* appendTo tippy.js
*
* @type {*}
*/
@Input() appendTo: any;

/**
* Initial tip
*
* @type {boolean}
*/
@Input() initialState: boolean;

/**
* Hide click outside
*/
@Input() closeClickOutside = true;

/**
* State tip
*
* @type {boolean}
*/
@Input() state: boolean;

/**
* Listener keyup esc hide tip
*/
@HostListener('keyup.esc') onEsc() {
    this.hide();
}

/**
* Listen keyup enter show tip
*/
@HostListener('keyup.enter') onOpen() {
    this.show();
}

/**
* State tip
*/
@Output() stateOn = new EventEmitter();`;

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-directives-others', 'doc-directives-tip');
  }
}
