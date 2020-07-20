import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ShoppingCart: Array<any>;
  constructor(private cart : CartService, private as :AuthService) { }

  ngOnInit(): void {
    // as we open cart , from frontend , we will show all the things of this user , so simply add it to ShoppingCart , 
    if(this.as.userId){
    this.cart.getCart().subscribe(cs=>{
       this.ShoppingCart = cs.map(x=>{
          return {
           id: x.payload.doc.id,
           ...x.payload.doc.data() as {}
          }
       })
      //  console.log(this.ShoppingCart);
    })
  }
    
  }
   deleteCart(index){
     this.cart.deletedocfromcart(this.ShoppingCart[index].id);
   }

updatecart(index){
    this.cart.updatedocfromcart(this.ShoppingCart[index].id , this.ShoppingCart[index].amount);
}
}