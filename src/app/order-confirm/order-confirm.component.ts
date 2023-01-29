import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, isFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent {
  Comment: string = 'Comment';
  show: boolean= false;
  details: boolean=false;

  constructor(private fb: FormBuilder) {
  }

  showMore() {
    this.show=true;
  }

  showDetails() {
    this.details=true;
  }

  cancelOrder() {
    alert('Order canceled.');
  }

  confirmOrder() {
    alert('Order confirmed!');
  }
}
