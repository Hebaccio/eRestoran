import { Component } from '@angular/core';

@Component({
  selector: 'app-orders3',
  templateUrl: './orders3.component.html',
  styleUrls: ['./orders3.component.css']
})
export class Orders3Component {
  more: boolean = false;
  total : boolean=true;
  more2: boolean = false;
  total2 : boolean=true;
  more3: boolean = false;
  total3 : boolean=true;
  more4:boolean=false;
  total4:boolean=false;

  openMore() {
    this.more = !this.more;
    this.total= !this.total;
  }

  openMore2() {
    this.more2 = !this.more2;
    this.total2= !this.total2;
  }

  openMore3() {
    this.more3 = !this.more3;
    this.total3= !this.total3;
  }

  openMore4() {
    this.more4 = !this.more4;
    this.total4= !this.total4;
  }
}
