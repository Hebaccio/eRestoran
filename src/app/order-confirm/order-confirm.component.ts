import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent {
  Comment: string = 'Comment';
  show: boolean= false;
  details: boolean=false;

  constructor() {
  }

  showMore() {
    this.show=true;
  }

  showDetails() {
    this.details=true;
  }
}
