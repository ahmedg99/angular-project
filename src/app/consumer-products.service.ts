import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Product } from './core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductsService {



  // Base url
  baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


   // GET ALL PRODUCTS 
   getProducts() {
    return this.http
      .get<Product[]>(this.baseurl + '/products') ;
  }

     // add ALL PRODUCTS 
     addProduct(product : Product) {
      return this.http.post(this.baseurl + '/products',product)
    }

         // delete  PRODUCTS 
         delete(id:number) {
          return this.http.delete(this.baseurl + '/products' + '/'+id)
        }
  


}
