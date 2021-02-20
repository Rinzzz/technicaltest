import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CreditCardType } from '../models/credit.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  mockUrl = "http://demo2449431.mockable.io/pay";
  constructor(private http: HttpClient) { }

  initiatePayment( creditObj : any ):Observable<any>{
    return this.http.post<CreditCardType>(this.mockUrl,creditObj);
  }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
}
