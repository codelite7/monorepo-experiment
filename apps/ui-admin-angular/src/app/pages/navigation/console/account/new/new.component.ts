import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MainService} from "@main/main.service";
import {MainNavService} from "@main/main-nav/main-nav.service";
import {Title} from "@angular/platform-browser";
import {NotificationService} from "@main/notification/notification.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StripeCardComponent, StripeFactoryService, StripeInstance} from "ngx-stripe";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {StripeCardElementOptions, StripeElementsOptions} from "@stripe/stripe-js";
import {LoadingGeneralService} from "@main/loading-general/loading-general.service";
import {MatStepper} from "@angular/material/stepper";
import {ModalDialogComponent} from "@shared/ui-elements/modal/modal-dialog/modal-dialog.component";
import {Router} from "@angular/router";
import { environment } from "../../../../../../environments/environment";

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
    @ViewChild('stepper') private myStepper: MatStepper;
    @ViewChild('paymentError') private paymentError: ModalDialogComponent;
    tierFormGroup?: FormGroup
    paymentFormGroup?: FormGroup
    plans: string[] = ['sandbox', 'team', 'business']
    selectedPlan: string = 'default'
    @ViewChild(StripeCardComponent) card: StripeCardComponent;
    stripe: StripeInstance;
    count: number = 0;
    cardOptions: StripeCardElementOptions = {
        style: {
            base: {
                iconColor: '#666EE8',
                color: '#31325F',
                fontWeight: '300',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                    color: '#CFD7E0',
                },
            },
        },
    };
    elementsOptions: StripeElementsOptions = {};
  constructor(
      public mainNavService: MainNavService,
      public mainService: MainService,
      private titleService: Title,
      private formBuilder: FormBuilder,
      private router: Router,
      private stripeFactory: StripeFactoryService,
      public loadingService: LoadingGeneralService,
  ) { }

  ngOnInit(): void {
      this.stripe = this.stripeFactory.create(environment.stripePublicKey);
      this.mainNavService.selectedItem('');
      this.titleService.setTitle('Account Setup - Swarm IO');
      this.tierFormGroup = this.formBuilder.group({
          selectedTier: ['', Validators.required],
      });
      this.paymentFormGroup = this.formBuilder.group({
          acceptTerms: [false, [Validators.requiredTrue]],
          cardComplete: [false, [Validators.requiredTrue]],
      });
  }

  selectPlan(plan:string) {
      this.selectedPlan = plan
      this.tierFormGroup?.controls.selectedTier.setValue(plan)
      this.tierFormGroup?.controls.selectedTier.markAsTouched()
  }

    onChange(event): void {
        this.paymentFormGroup?.get('cardComplete')?.setValue(event.complete);
    }

    loading(): void {
        this.loadingService.setOptions({}).show(5000);
    }

    get acceptTerms() {
        return this.paymentFormGroup?.get('acceptTerms');
    }

    get selectedTier() {
      return this.tierFormGroup?.get('selectedTier')
    }

    submitPayment() {
      if (this.count === 0) {
          this.paymentError.show()
          this.count++;
      } else {
          this.myStepper.next()
          setTimeout(() => this.router.navigate(['/console']), 5000)
      }
    }
}
