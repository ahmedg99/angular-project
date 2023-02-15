import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  product ! : Product ;
  msg ! : string ;
  ngOnInit(): void {
    this.product = new Product() ;


  }

  ValidityState() {
      this.msg= this.product.id.toString()   ; 
  }

}
