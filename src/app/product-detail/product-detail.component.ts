import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id! : number ; 
product! : Product ;
list! : Product[] ;
 
  constructor(private route  : ActivatedRoute , private productService : ServicesService) { 
   // this.product = this.productService.getProductById(this.id) ; 
   this.list = this.productService.listProdcut ;

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    
  }

}
