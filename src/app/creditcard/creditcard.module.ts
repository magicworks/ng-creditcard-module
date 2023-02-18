import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { CardDispayComponent } from './card-dispay/card-dispay.component';
import { InputComponent } from '../input/input.component';
import { CreditcardComponent } from './creditcard/creditcard.component';

@NgModule({
  declarations: [
    CardFormComponent,
    CardDispayComponent,
    InputComponent,
    CreditcardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreditcardComponent
  ]
})
export class CreditcardModule { }
