import { Injectable } from '@angular/core';
import { Emploi } from './core/model/Emploi';
import { Product } from './core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  c : number = 0 ;
listProdcut:Product[]
  =[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ] ;


    listOffresEmploi : Emploi[] = [{reference : "2" , titre : "offre 1" , entreprise : "vermeg" , etat : true},
    {reference : "3" , titre : "offre 2" , entreprise : "sofrecom" , etat : false},
    {reference : "4" , titre : "offre 3" , entreprise : "telnet" , etat : true}]

  constructor() { }


addProduct(product : Product) {this.listProdcut.push(product);}
/*
  let getProductById = function(id: number){
  return  this.listProdcut.filter(p=>p.id==id) ;
}
*/

 coutEntityByAttricute= function( liste : any[] , critere : string , value : any  ){

    
 let c = 0;
    liste.forEach(element => {
    if (element[critere]===value) {
       c ++ ;
    }
  });

  return c ;

  /*
  if(typeof value == "number") {
     return liste.filter(element => {element.critere==value}).length;
  }

  if(typeof value == "boolean") {
    return liste.filter(element => {element.critere==value}).length;

  }
 */
}

}


