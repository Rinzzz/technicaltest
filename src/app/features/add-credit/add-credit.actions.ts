import { createAction, props } from '@ngrx/store';
import { CreditCardType } from 'src/app/shared/models/credit.model';

export const getInfo = createAction('[CreditCard] GetInfo');
export const setInfo = createAction('[CreditCard] setInfo',props<{creditCardState:CreditCardType}>());
