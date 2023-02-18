import { Component, Input } from '@angular/core';
import { Creditcard } from '../card-form/card-form.component';


@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent {
  cardValues: Creditcard = {};

  onCardValuesChange (values: Object) {
    this.cardValues = values as Creditcard;
    console.log('Parent', this.cardValues.name);
  }

}
