import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {
  kolicina1:number=1;
  kolicina2:number=1;
  kolicina3:number=1;
  prikaziOrder1:boolean=true;
  prikaziOrder2:boolean=true;
  prikaziOrder3:boolean=true;
  total1:boolean=false;
  total2:boolean=false;
  total3:boolean=true;

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
    else {
      this.kolicina1 = this.kolicina1 - 1;
      this.total1=true;
      this.total2=false;
    }
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

  smanjiKolicinu3() {
    if(this.kolicina3==1)
      return;
    else {
      this.kolicina3 = this.kolicina3 - 1;
      this.total1=false;
      this.total2=false;
      this.total3=true;
    }
  }
  povecajKolicinu3() {
    this.kolicina3 = this.kolicina3 + 1;
    this.total1=false;
    this.total2=true;
    this.total3=false;
  }

  ukloni3() {
    this.prikaziOrder3=false;
    this.total1=true;
    this.total2=false;
    this.total3=false;
  }
}
