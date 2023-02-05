import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component {

  constructor(private router: Router) {
    //@ts-ignore
    this.email = sessionStorage.getItem('email');
  }

  @Input()
  email: string = '';

  EditPassword() {
    this.router.navigateByUrl("update-password-email");
  }

  EditProfile() {
    this.router.navigateByUrl("edit-profile");
  }

  LogOut() {
    this.router.navigateByUrl("home");
  }
}
