import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title : string =  "ahmed" ; 
  listProdcut! : Product[];
  priceMax! : number ; 
  

    
  constructor() { }

  ngOnInit(): void {
    this.listProdcut
    =[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ] ;
  }
  buy(i:number) {
    if(this.listProdcut[i].quantity>0)
    this.listProdcut[i].quantity--;
   }
   like(i:number) {
    this.listProdcut[i].like++;
   }


   
   searchProducts(query : string ) {
      for (let i = 0; i<this.listProdcut.length ; i++) {

      console.log();
   }

}
}
