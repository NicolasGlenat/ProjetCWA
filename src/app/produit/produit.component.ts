import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  nom: string;
  marque: string;
  prix: number;
  i: number;
  description: string;
  imageurl: string;
  buttontexte: string;
  private OBJ : string[];

  constructor() { }

  ngOnInit(): void {
    this.nom = "céréale";
    this.marque = "marquerandom";
    this.prix = 5;
    this.description = "description";
    this.imageurl = "./../../assets/Lion.jpg";
    this.buttontexte = "Ajouter au panier";
    this.OBJ = [];
    this.i = 0;

  }

  onAjoutPanier() {
    this.OBJ.push(this.nom);
	   for (this.i = 0; this.i < this.OBJ.length; this.i++) {
       console.log("produit" + this.OBJ[this.i] + this.i);
     }
  }

}
