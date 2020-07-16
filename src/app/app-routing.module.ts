import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes, Router} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {CartComponent} from './components/cart/cart.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import{ProductsComponent} from './components/products/products.component';
import {OrdersComponent} from './components/orders/orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
 {path: '' , component: HomeComponent},
 {path: 'account',component:AccountComponent},
 {path: 'cart',component:CartComponent},
 {path: 'login',component:LoginComponent},
 {path: 'logout',component:LogoutComponent},
 {path: 'sign-up',component:SignUpComponent},
 {path: 'products',component:ProductsComponent},
 {path: 'orders',component:OrdersComponent},
 {path: '**' , component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
