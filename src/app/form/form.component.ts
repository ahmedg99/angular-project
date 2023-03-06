import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ConsumerProductsService } from '../consumer-products.service';
import { Product } from '../core/model/Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product ! : Product ;
  msg ! : string ;
  listProducts  !: Product[];

  constructor(private  productService : ServicesService , private route:Router , private pS : ConsumerProductsService) { }



  ngOnInit(): void {
    this.product = new Product() ;
    this.listProducts=this.productService.listProdcut ;

  }

  ValidityState() {
      this.msg= this.product.id.toString()   ; 
  }


addProduct(product :Product) {

this.pS.addProduct(this.product).subscribe({
  next : () => this.route.navigateByUrl('/products')
})


  /*

  this.addProduct(this.product) ;
   this.productService.addProduct(this.product);
   this.route.navigateByUrl('/products');
   */
}


}
