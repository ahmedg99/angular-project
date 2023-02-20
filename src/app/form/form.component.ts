import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private  productService : ServicesService , private route:Router) { }



  ngOnInit(): void {
    this.product = new Product() ;
    this.listProducts=this.productService.listProdcut ;

  }

  ValidityState() {
      this.msg= this.product.id.toString()   ; 
  }


addProduct(product :Product) {
   this.productService.addProduct(this.product);
   this.route.navigateByUrl('/products');
}


}
