import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from "./acceuil/acceuil.component";
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';



const routes: Routes = [
  {path:'ac',component: AcceuilComponent},
  {path: 'pan', component: PanierComponent},
  {path: 'log', component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
