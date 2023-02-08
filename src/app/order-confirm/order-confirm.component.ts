import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent {
  Comment: string = 'Comment';
  show: boolean= false;
  details: boolean=false;
  gray:boolean=false;
  noGray:boolean=true;
  pick: boolean=false;
  delivery: boolean=true;
  patternCard="1234-5678-1234-5678";
  noCard:boolean=false;
  patternDate="05/20";
  noDate:boolean=false;

  constructor(private fb: FormBuilder, private router : Router) {
  }

  showMore() {
    this.show=true;
    this.pick=false;
    this.delivery=true;
  }

  showDetails() {
    this.details=true;
    this.gray=false;
    this.noGray=true;
  }

  cancelOrder() {
    confirm('Are you sure you want to cancel?');
    this.router.navigateByUrl('menu');
  }

  confirmOrder() {
    alert('Order confirmed!');
    this.router.navigateByUrl('orders');
  }

  grayOut() {
    this.gray=true;
    this.noGray=false;
  }

  pickUp() {
    this.pick=true;
    this.delivery=false;
  }

  checkCard(cardInput: string) {
    if(cardInput != this.patternCard) {
      return this.noCard = true;
    }
    else {
      return this.noCard = false;
    }
  }

  checkDate(dateInput: string) {
    if(dateInput != this.patternDate) {
      return this.noDate = true;
    }
    else {
      return this.noDate = false;
    }
  }
}
