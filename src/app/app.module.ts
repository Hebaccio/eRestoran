import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { Footer2Component } from './footer2/footer2.component';
import { TosComponent } from './tos/tos.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    Navbar2Component,
    MenuComponent,
    FooterComponent,
    LogInComponent,
    SignUpComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    Footer2Component,
    TosComponent,
    UpdatepasswordComponent,
    OrderConfirmComponent,
    OrderViewComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'log-in', component: LogInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'tos', component: TosComponent},
      {path: 'update-password-email', component: UpdatepasswordComponent},
      {path: 'update-password-username', component: ChangepasswordComponent},
      {path: 'edit-profile', component: EditprofileComponent},
      {path: 'order-confirm', component: OrderConfirmComponent},
      {path: 'order-view', component: OrderViewComponent},
      {path: 'orders', component: OrdersComponent}
    ], {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
