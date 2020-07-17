import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth) { }

  signup(email : string , password: string)
  {
    return this.fauth.auth.createUserWithEmailAndPassword(email , password);
  }
}
