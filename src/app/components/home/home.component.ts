import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import {Product} from './../../interface/products.interface';
import {ProductsService} from '../../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // change Product to any
  Products: Array<any> =[
//  {
//    Name : "Banana",Price: 3,Desc:"Fruit" , ProductPath:'assets/banana.jpg'
//  },
//  {
//   Name : "Mango",Price: 4,Desc:"Fruit" , ProductPath:'/assets/mango.png'
// },
// {
//   Name : "kiwi",Price: 2,Desc:"Fruit" , ProductPath:'assets/kiwi.jpg'
// },
// {
//   Name : "strawberry",Price: 1,Desc:"Fruit" , ProductPath:'assets/strawberry.jpeg'
// },

  ];
  add:number = -1;
     
  constructor(private ps : ProductsService , private cart: CartService , private as: AuthService , private router:Router) { }

  ngOnInit(): void {
     
    this.ps.getAllProducts().subscribe(
      data=>this.Products=data
    )
  }
  addToCart(index)
  {   
     
     this.add = index;
    // console.log("Added" , this.Products[index]);
  }
  buy(amount) {
    // this.add has index.
    if(this.as.userId){
      let selectedProduct= this.Products[this.add];
      let data = {
        name: selectedProduct.Name,
        price: selectedProduct.Price,
        amount: amount
      }
      // console.log(data);
      // this data into user collection to database , so we can create a new service cart or used either user.service.ts , we will create new service , better practice.
      // call this service cartService  , returns promise
      this.cart.addToCart(data)
      .then(()=>this.add=-1)
      .catch(err=>console.log(err));
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
