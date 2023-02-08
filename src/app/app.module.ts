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
import { Footer2Component } from './footer2/footer2.component';
import { TosComponent } from './tos/tos.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrdersComponent } from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Home2Component } from './home2/home2.component';
import { Profile2Component } from './profile2/profile2.component';
import { OrderView2Component } from './order-view2/order-view2.component';
import { OrderConfirm2Component } from './order-confirm2/order-confirm2.component';
import { Orders2Component } from './orders2/orders2.component';
import { Orders3Component } from './orders3/orders3.component';

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
    Footer2Component,
    TosComponent,
    UpdatepasswordComponent,
    OrderConfirmComponent,
    OrderViewComponent,
    OrdersComponent,
    Home2Component,
    Profile2Component,
    OrderView2Component,
    OrderConfirm2Component,
    Orders2Component,
    Orders3Component,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},//HERE
            {path: 'profile', component: ProfileComponent},//HERE
            {path: 'menu', component: MenuComponent},
            {path: 'log-in', component: LogInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'tos', component: TosComponent},
            {path: 'update-password-email', component: UpdatepasswordComponent},
            {path: 'edit-profile', component: EditprofileComponent},
            {path: 'order-confirm', component: OrderConfirmComponent},
            {path: 'order-view', component: OrderViewComponent},
            {path: 'orders', component: OrdersComponent},
        ], {scrollPositionRestoration: 'enabled'}),
        ReactiveFormsModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
