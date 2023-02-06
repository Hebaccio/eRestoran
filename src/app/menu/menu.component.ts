import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrderView2Component} from "../order-view2/order-view2.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  meni1:boolean=true;
  meni2:boolean=false;
  meni3:boolean=false;
  meni4:boolean=false;
  meni5:boolean=false;
  meni6:boolean=false;
  meni7:boolean=false;
  meni8:boolean=false;
  meni9:boolean=false;
  meni10:boolean=false;
  meni11:boolean=false;
  meni12:boolean=false;
  order: boolean=false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openMeni1() {
    this.meni1=true;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni2() {
    this.meni1=false;
    this.meni2=true;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni3() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=true;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni4() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=true;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni5() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=true;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni6() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=true;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni7() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=true;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni8() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=true;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni9() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=true;
    this.meni10=false;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni10() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=true;
    this.meni11=false;
    this.meni12=false;
  }
  openMeni11() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=true;
    this.meni12=false;
  }
  openMeni12() {
    this.meni1=false;
    this.meni2=false;
    this.meni3=false;
    this.meni4=false;
    this.meni5=false;
    this.meni6=false;
    this.meni7=false;
    this.meni8=false;
    this.meni9=false;
    this.meni10=false;
    this.meni11=false;
    this.meni12=true;
  }

  openOrderView() {
    this.router.navigateByUrl("order-view");
  }

  showOrder() {
    this.order=true;
  }
}
