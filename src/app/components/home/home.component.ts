import { Component, OnInit } from '@angular/core';
import {Product} from './../../interface/products.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<Product> =[
 {
   Name : "Banana",Price: 3,Desc:"Fruit" , ProductPath:'assets/banana.jpg'
 },
 {
  Name : "Mango",Price: 4,Desc:"Fruit" , ProductPath:'/assets/mango.png'
},
{
  Name : "kiwi",Price: 2,Desc:"Fruit" , ProductPath:'assets/kiwi.jpg'
},
{
  Name : "strawberry",Price: 1,Desc:"Fruit" , ProductPath:'assets/strawberry.jpeg'
},

  ];
     
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(index)
  {
    console.log("Added" , this.Products[index]);
  }

}
