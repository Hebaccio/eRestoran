import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-view2',
  templateUrl: './order-view2.component.html',
  styleUrls: ['./order-view2.component.css']
})
export class OrderView2Component {
  kolicina1:number=1;
  kolicina2:number=1;
  prikaziOrder1:boolean=true;
  prikaziOrder2:boolean=true;

  constructor(private router: Router) {
  }
  goBack() {
    this.router.navigateByUrl("menu");
  }

  goNext() {
    this.router.navigateByUrl("order-confirm");
  }

  smanjiKolicinu1() {
    if(this.kolicina1==1)
      return;
    else
      this.kolicina1 = this.kolicina1 - 1;
  }
  smanjiKolicinu2() {
    if(this.kolicina2==1)
      return;
    else
      this.kolicina2 = this.kolicina2 - 1;
  }
  povecajKolicinu1() {
    this.kolicina1 = this.kolicina1 + 1;
  }
  povecajKolicinu2() {
    this.kolicina2 = this.kolicina2 + 1;
  }
  ukloni1() {
    this.prikaziOrder1=false;
  }
  ukloni2() {
    this.prikaziOrder2=false;
  }
  cancelOrder() {
    confirm('Are you sure you want to cancel?');
    this.router.navigateByUrl('menu');
  }
}
