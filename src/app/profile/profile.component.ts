import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router) {
    //@ts-ignore
    this.email=sessionStorage.getItem('email');
  }

  @Input()
  email:string='';

  EditPassword() {
    this.router.navigateByUrl("update-password-email");
  }
  EditProfile() {
    this.router.navigateByUrl("edit-profile");
  }
}
