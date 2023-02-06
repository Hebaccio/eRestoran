import { Component } from '@angular/core';

@Component({
  selector: 'app-orders2',
  templateUrl: './orders2.component.html',
  styleUrls: ['./orders2.component.css']
})
export class Orders2Component {
  more: boolean = false;
  total : boolean=true;
  more2: boolean = false;
  total2 : boolean=true;
  more3: boolean = false;
  total3 : boolean=true;

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
}
