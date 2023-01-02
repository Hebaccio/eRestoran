import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {

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

  EditPassword() {
    this.router.navigateByUrl("update-password-username");
  }

}
