import { AuthService } from './auth.service';
import { Product } from './../interface/products.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs : AngularFirestore , private as : AuthService) {
      
   }
   addToCart(Product){
    //  this is users collection in firebase database , then we need user uid , then new collection , cart is there.
    // uid , kaha se aayegi , ? auth service mh user ka observable hai ,vaha se aayegi .ab user ko subscribe navbar , mh kra tha taaki pta chlein kya show krna hai ya nhi , toh navbar mh jaakr bs ek extra userId naam ka variable auth service mh jo bnaliya hoga , use bnalenge , simply aur bnaliya hai toh , navbar mh hi uski userId bhrdenge. aur phir cart mh use krlenge vo variable userId.
     return this.fs.collection(`users/${this.as.userId}/cart`).add(Product);
   }
   getCart(){
    //  snapshot changes retrives data from firebase returns observable , , now we want this function to be called from cart.component.ts , since we will display it there.
       
      return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges();
   
  }
  // this id is document id for us.
  deletedocfromcart(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
    
  }
  // this is also document id for us.
  updatedocfromcart(id , amount){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({ amount });
  }
}
