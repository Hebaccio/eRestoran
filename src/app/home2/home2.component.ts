import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "");
  }

  OpenMenu() {
    this.router.navigateByUrl("menu");
  }
  OpenProfile() {
    this.router.navigateByUrl("profile");
  }
  OpenOrders() {
    this.router.navigateByUrl("orders");
  }

}
