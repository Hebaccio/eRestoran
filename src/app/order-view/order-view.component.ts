import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {

  constructor(private router: Router) {
  }

  goBack() {
    this.router.navigateByUrl("menu");
  }

  goNext() {
    this.router.navigateByUrl("order-confirm");
  }
}
