import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './service/payment.service';
import { ToastComponent } from './UI/toast/toast.component';


@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ToastComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<object> {
    return {
      ngModule: SharedModule,
      providers: [PaymentService]
    }
  }
}
