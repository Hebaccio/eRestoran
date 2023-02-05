import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

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
    this.router.navigateByUrl("log-in");
    //this.router.navigateByUrl("profile");
  }

  OpenLogIn() {
    this.router.navigateByUrl("log-in");
  }
  OpenSignUp() {
    this.router.navigateByUrl("sign-up");
  }
  OpenOrders() {
    this.router.navigateByUrl("log-in");
    //this.router.navigateByUrl("orders");
  }
}
