import { trigger, state, style, transition, animate } from '@angular/animations';
/**
 * Fade animation
 *
 * @export
 * @param {string} [timeIn='200ms']
 * @param {string} [timeOut='200ms']
 * @param {number} [opacityEnter=1]
 * @param {number} [opacityLeave=0]
 * @returns
 */
export function FadeAnimation(timeIn = '200ms', timeOut = '200ms', opacityEnter = 1, opacityLeave = 0) {
    return [
        trigger('fadeIn', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate(`${timeIn} ease-in`, style({ opacity: opacityEnter })),
            ]),
        ]),
        trigger('fadeOut', [transition(':leave', [animate(`${timeOut} ease-in`, style({ opacity: opacityLeave }))])]),
    ];
}
/**
 * Expansed
 *
 * @export
 * @param {string} [time='300ms']
 * @returns
 */
export function ExpansedHeight(time = '300ms') {
    return [
        trigger('animateContent', [
            state('hide', style({
                height: '0',
            })),
            state('show', style({
                height: '*',
            })),
            transition('hide <=> show', animate(`${time} ease-in`)),
        ]),
    ];
}
/**
 * Expansed and padding
 *
 * @export
 * @param {string} [time='300ms']
 * @param {string} [padding='1rem']
 * @returns
 */
export function ExpansedHeight2(time = '300ms', padding = '1rem') {
    return [
        trigger('animateContent', [
            state('hide', style({
                height: '0',
                padding: 0,
            })),
            state('show', style({
                height: '*',
                padding,
            })),
            transition('hide <=> show', animate(`${time} ease-in`)),
        ]),
    ];
}
/**
 * Fade animation2
 *
 * @export
 * @param {string} [timeIn='200ms']
 * @param {string} [timeOut='200ms']
 * @returns
 */
export function FadeAnimation2(timeIn = '300ms', timeOut = '300ms') {
    return [
        trigger('fade', [
            transition('* => in', [style({ opacity: 0 }), animate(timeIn, style({ opacity: 1 }))]),
            transition('* => out', [style({ opacity: 1 }), animate(timeOut, style({ opacity: 0 }))]),
        ]),
    ];
}
/**
 * Slide animation
 *
 * @export
 * @param {string} [timeIn='200ms']
 * @param {string} [timeOut='200ms']
 * @returns
 */
export function SlideAnimation(timeIn = '200ms', timeOut = '200ms') {
    return [
        trigger('slideTopOut', [
            transition(':leave', [animate(`${timeOut} ease-in`, style({ transform: 'translateY(-100%)' }))]),
        ]),
        trigger('slideTopIn', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate(`${timeIn} ease-in`, style({ transform: 'translateY(0%)' })),
            ]),
        ]),
        trigger('slideBottomOut', [
            transition(':leave', [animate(`${timeOut} ease-in`, style({ transform: 'translateY(100%)' }))]),
        ]),
        trigger('slideBottomIn', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate(`${timeIn} ease-in`, style({ transform: 'translateY(-100%)' })),
            ]),
        ]),
        trigger('slideLeftIn', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate(`${timeIn} ease-in`, style({ transform: 'translateX(0%)' })),
            ]),
        ]),
        trigger('slideLeftOut', [
            transition(':leave', [animate(`${timeOut} ease-in`, style({ transform: 'translateX(-100%)' }))]),
        ]),
        trigger('slideRightIn', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate(`${timeIn} ease-in`, style({ transform: 'translateX(-100%)' })),
            ]),
        ]),
        trigger('slideRightOut', [
            transition(':leave', [animate(`${timeOut} ease-in`, style({ transform: 'translateX(100%)' }))]),
        ]),
    ];
}
//# sourceMappingURL=animation.js.map