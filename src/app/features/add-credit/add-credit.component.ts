import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaymentService } from '../../shared/service/payment.service';
import { CreditCardType } from '../../shared/models/credit.model';
import { Observable } from 'rxjs';
import { setInfo } from './add-credit.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.scss']
})

export class AddCreditComponent implements OnInit {

  // INITIALIZATIONS
  creditCard$!: Observable<{ creditCardState: CreditCardType }>;
  minDate = new Date().toISOString();
  responseMessage: string = '';

  addCreditForm: FormGroup = this.fb.group({
    creditCard: ['', Validators.required],
    cardHolder: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    expirationDate: ['', Validators.required],
    cvv: ['', Validators.minLength(3)],
    amount: [, [Validators.required, Validators.min(1)]],
  })



  constructor(private fb: FormBuilder, private paymentService: PaymentService, private store: Store<{ creditCard: { creditCardState: CreditCardType } }>) {

    // SUBSCRIBING TO STORE
    this.creditCard$ = this.store.select('creditCard');
    // ASSIGNING STORE VALUES ON THE FORM FOR PERSISTING THE DATA
    this.creditCard$.subscribe(savedInfo => {
      this.addCreditForm.setValue({
        creditCard: savedInfo.creditCardState.creditCard ? savedInfo.creditCardState.creditCard : '',
        cardHolder: savedInfo.creditCardState.cardHolder ? savedInfo.creditCardState.cardHolder : '',
        expirationDate: savedInfo.creditCardState.expirationDate ? savedInfo.creditCardState.expirationDate : '',
        cvv: savedInfo.creditCardState.cvv ? savedInfo.creditCardState.cvv : '',
        amount: savedInfo.creditCardState.amount ? savedInfo.creditCardState.amount : 0
      })
    }
    );
  }

  // GETTERS FOR FORM DATA
  get cardHolder() { return this.addCreditForm.get('cardHolder'); }

  get cvv() { return this.addCreditForm.get('cvv'); }

  get amount() { return this.addCreditForm.get('amount'); }



  // FORM SUBMIT
  onSubmit() {
    const requestObj: CreditCardType = this.addCreditForm.value;
    this.responseMessage = '';
    this.paymentService.initiatePayment(requestObj).subscribe((data) => {
      if (data && data.status) {
        this.responseMessage = data.status;
        this.store.dispatch(setInfo({ creditCardState: requestObj }));
      }
    });
  }
  ngOnInit(): void {
  }

}
