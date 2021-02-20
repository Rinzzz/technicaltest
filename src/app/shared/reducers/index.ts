import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { getInfo, setInfo } from '../../features/add-credit/add-credit.actions';
import { CreditCardType } from '../models/credit.model';

export interface AppState {
    creditCardState: CreditCardType
}
export const initialState: AppState = {
    creditCardState: {
        creditCard: '',
        cardHolder: '',
        expirationDate: new Date(),
        cvv: '',
        amount: 0
    }
};

const _creditCardReducer = createReducer(
    initialState,
    on(getInfo, (state) => ({ ...state })),
    on(setInfo, (state, action) => ({
        ...state,
        creditCardState: action.creditCardState
    })),
);

export function creditCardReducer(state: AppState = initialState, action: Action) {
    return _creditCardReducer(state, action);
}