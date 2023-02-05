import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  more: boolean = false;
  total : boolean=true;
  more2: boolean = false;
  total2 : boolean=true;

  openMore() {
    this.more = !this.more;
    this.total= !this.total;
  }

  openMore2() {
    this.more2 = !this.more2;
    this.total2= !this.total2;
  }
}
