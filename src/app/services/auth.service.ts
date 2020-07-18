import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   user:Observable<firebase.User>;
  constructor(private fauth: AngularFireAuth) { 
      this.user=fauth.user;
  }

  signup(email : string , password: string)
  {
    return this.fauth.auth.createUserWithEmailAndPassword(email , password);
  }
  
  login(email:string , password:string) {
       return this.fauth.auth.signInWithEmailAndPassword(email , password);
  }
  logout(){
    this.fauth.auth.signOut();
  }

}
