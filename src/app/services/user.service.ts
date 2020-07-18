import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as : AngularFirestore) { }

  addNewUser(id , name , address)
  {
    // as.doc used to insert in collection users , doc is used for single user.
    return this.as.doc('users/' + id).set({
      name:name,
      address:address
    })
  }
}
