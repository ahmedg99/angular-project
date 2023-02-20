import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-offres-emplois',
  templateUrl: './offres-emplois.component.html',
  styleUrls: ['./offres-emplois.component.css']
})
export class OffresEmploisComponent implements OnInit {

  constructor(private ServiceProduct : ServicesService) { }
  listOffresEmploi! : Emploi[];

  s ! : Number   ;

  ngOnInit(): void {
    this.listOffresEmploi = [{reference : "2" , titre : "offre 1" , entreprise : "vermeg" , etat : true},
    {reference : "3" , titre : "offre 2" , entreprise : "sofrecom" , etat : false},
    {reference : "4" , titre : "offre 3" , entreprise : "telnet" , etat : true}]
  }
  Number() {
    this.s = this.ServiceProduct.coutEntityByAttricute(this.ServiceProduct.listProdcut , "quantity" , 0)
    console.log( this.ServiceProduct.coutEntityByAttricute(this.ServiceProduct.listProdcut , "quantity" , 0));
  }
    /*
    for(let i = 0 ; i < this.listOffresEmploi.length ; i ++) {

      if(this.listOffresEmploi[i].etat==true) {
        this.s++ ;
      }

    }
    */
    // }

}
