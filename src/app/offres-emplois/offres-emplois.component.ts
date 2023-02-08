import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';

@Component({
  selector: 'app-offres-emplois',
  templateUrl: './offres-emplois.component.html',
  styleUrls: ['./offres-emplois.component.css']
})
export class OffresEmploisComponent implements OnInit {

  constructor() { }
  listOffresEmploi! : Emploi[];
  s=0  ;

  ngOnInit(): void {
    this.listOffresEmploi = [{reference : "2" , titre : "offre 1" , entreprise : "vermeg" , etat : true},
    {reference : "3" , titre : "offre 2" , entreprise : "sofrecom" , etat : false},
    {reference : "4" , titre : "offre 3" , entreprise : "telnet" , etat : true}]
  }
  Number() {
    for(let i = 0 ; i < this.listOffresEmploi.length ; i ++) {

      if(this.listOffresEmploi[i].etat==true) {
        this.s++ ;
      }

    }
     }

}
