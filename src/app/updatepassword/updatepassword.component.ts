import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {

  constructor(private router: Router) { }

  passwordType1: string = 'password';
  passwordShown: boolean = false;

  public togglePassword1(){
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType1='password';
    }else{
      this.passwordShown=true;
      this.passwordType1='text';
    }
  }

}
