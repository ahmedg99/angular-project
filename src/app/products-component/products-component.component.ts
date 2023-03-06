import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumerProductsService } from '../consumer-products.service';
import { Product } from '../core/model/Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title : string =  "ahmed" ; 
   priceMax! : number ; 
   listProdcut!:Product[];
   s=0 ;  

    
  constructor(private serviceProducts : ServicesService, private consumerProducs : ConsumerProductsService , private ConsumerP : ConsumerProductsService , private route:Router ) { 
    this.route.navigateByUrl('/products');

  }

  ngOnInit(): void {

    //this.listProdcut = this.serviceProducts.listProdcut ;
    this.consumerProducs.getProducts().subscribe( {
      next : (data) =>  this.listProdcut =data,

    
    }); 
 
  }
  buy(i:number) {
    if(this.listProdcut[i].quantity>0)
    this.listProdcut[i].quantity--;
   }
   like(i:number) {
    this.listProdcut[i].like++;
   }

   number() {
      this.s=this.serviceProducts.coutEntityByAttricute(this.serviceProducts.listProdcut , "quantity" , 0);
      console.log(this.serviceProducts.coutEntityByAttricute(this.serviceProducts.listProdcut , "quantity" , 0));

   }
   
   searchProducts(query : string ) {
      for (let i = 0; i<this.listProdcut.length ; i++) {
      console.log();
   }
  }
/*
   deletep(i : number) {
   return this.ConsumerP.delete(i).subscribe({

    next : () => { 
     this.listProdcut = this.listProdcut.filter((e)=> {e.id!=i}) ; 
     //  this.route.navigateByUrl('/products');


  }

   });   
   }
   */
   deletep(id: number) {
    this.consumerProducs.delete(id).subscribe(() => {
      this.listProdcut = this.listProdcut.filter(p => p.id !== id);
    });
  }


}

