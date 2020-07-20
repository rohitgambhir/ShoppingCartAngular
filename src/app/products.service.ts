import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireStorage} from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs : AngularFirestore , private storage: AngularFireStorage) { }
getAllProducts() {
  // points to firestore
  return this.fs.collection('Products').valueChanges();
}

addNewProducts(name: string , price: Number , image: File){
   let ref = this.storage.ref('ProductImages/' + image.name)
   ref.put(image).then(()=>{
     ref.getDownloadURL().subscribe(ProductPath=>{
        this.fs.collection('Products').add({
          Name: name,
          Price: price,
          ProductPath: ProductPath
        })
     })
   })
}
getProducts(){
  return this.fs.collection('Products').snapshotChanges();
}
deleteProducts(id){
  return this.fs.doc(`Products/${id}`).delete();
}
updateProducts(id , Price){
   return this.fs.doc(`Products/${id}`).update({ Price });
}

}