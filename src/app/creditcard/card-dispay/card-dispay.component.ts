import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dispay',
  templateUrl: './card-dispay.component.html',
  styleUrls: ['./card-dispay.component.scss']
})
export class CardDispayComponent {
  @Input() name?: string;
  @Input() cardNumber?: string;
  @Input() expiration?: string;
}
