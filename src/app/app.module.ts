import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
import{AngularFirestore , AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    OrdersComponent,
    ProductsComponent,
    SignUpComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'ecommerceapp'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
    
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
