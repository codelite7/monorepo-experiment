import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewEncapsulation,
} from '@angular/core';
import { FloatingCardService } from './floating-card.service';
import { MainService } from '../main.service';

@Component({
  selector: 'fz-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [],
})
export class FloatingCardComponent implements OnInit {
  contOpen = 0;

  @ViewChild('contentFC', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  constructor(
    public mainService: MainService,
    public floatingCardService: FloatingCardService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.contOpen = 0;
    this.floatingCardService.loadEmit.subscribe((res) => this.load(res.component, res?.params));
    this.floatingCardService.stateEmit.subscribe((res) => this.contOpen++);
  }

  /**
   * Load component
   *
   * @param {*} component
   * @param {*} [params=[]]
   */
  load(component, params = []) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const ref: any = this.viewContainerRef.createComponent(factory);
    params.forEach((element: any) => {
      ref.instance[element.param] = element.value;
    });
  }
}
