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
     
  constructor(private ps : ProductsService ) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      data=>this.Products=data
    )
  }
  addToCart(index)
  {
    console.log("Added" , this.Products[index]);
  }

}
