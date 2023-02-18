import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CardnumberFormControl } from './cardnumber-form-control';
import { DateFormControl } from './date-form-control';
import { NameFormControl } from './name-form-control';
import { SecuritycodeFormControl } from './securitycode-form-control';

export interface Creditcard {
  name?: string,
  cardNumber?: string,
  expiration?: string,
  securityCode?: string;
};

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})

export class CardFormComponent {
  @Output() formValuesInput = new EventEmitter<Creditcard>;

  cardForm = new FormGroup({
    name: new NameFormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new CardnumberFormControl('', [
      Validators.required,
      Validators.minLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^0[1-9]|1[0-2]\/\d{2}$/)
    ]),
    securityCode: new SecuritycodeFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ])
  });

  submitted: boolean = false;

  constructor() {
    this.cardForm.valueChanges.subscribe(value => {
      this.formValuesInput.emit(value);
    });
  }

  onSubmit () {
    console.log('Submitted');
    this.submitted = true;
  }

  onResetClick () {
    this.cardForm.reset();
  }
}
