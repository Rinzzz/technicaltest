import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCreditRoutingModule } from './add-credit-routing.module';
import { AddCreditComponent } from './add-credit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AddCreditComponent],
  imports: [
    CommonModule,
    AddCreditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AddCreditModule { }
