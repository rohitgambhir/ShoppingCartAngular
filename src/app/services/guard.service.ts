import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  
  constructor(private as :AuthService , private router: Router) { }
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  canActivate(path , route) : boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(resolve=>{
        this.as.user.subscribe(user=>{
             if(user)resolve(true)
             else{
               console.log('dont cheat bro');
             this.router.navigate(['/login']);
             }
        })
    })
  }
}
