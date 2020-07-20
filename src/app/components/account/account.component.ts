import { ProductsService } from './../../products.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 

   @ViewChild('image') image: ElementRef
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
  }
  addNewProduct(f :NgForm){
     let name= f.value.name,
     price=f.value.price,
     image=(this.image.nativeElement as HTMLInputElement).files[0]
     this.products.addNewProducts(name  , price , image);
    //  console.log(f.value)
    //  console.log((this.image.nativeElement as HTMLInputElement).files[0])
  }

}
