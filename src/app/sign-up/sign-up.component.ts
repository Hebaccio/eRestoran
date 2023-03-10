import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  url:string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  show = false;


  ngOnInit(): void {
  }

  passwordType1: string = 'password';
  passwordType2: string = 'password';
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

  public togglePassword2(){
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType2='password';
    }else{
      this.passwordShown=true;
      this.passwordType2='text';
    }
  }

  goToLink(url: string) {
    window.open(url, "");
  }

  LogIn() {
    this.router.navigateByUrl("log-in");
  }
  OpenTOS() {
    this.router.navigateByUrl("tos");
  }
}
