import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private nbproduit : number;
	private messagepanier : string;
	produitliste : string[];

  constructor() { }

  ngOnInit(): void {
    this.nbproduit = 0;
	  this.messagepanier = "Voici le contenu de votre panier :";
	  this.produitliste = ["vide"];
  }

}
