import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardType } from './shared/models/credit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';
  creditCard$!: Observable<{ creditCardState: CreditCardType }>;
  savedInfo!: CreditCardType;
  constructor(private store: Store<{ creditCard: { creditCardState: CreditCardType } }>) {
    this.creditCard$ = this.store.select('creditCard');
    this.creditCard$.subscribe(savedInfo => {
      this.savedInfo = savedInfo.creditCardState;
    });
  }

}
