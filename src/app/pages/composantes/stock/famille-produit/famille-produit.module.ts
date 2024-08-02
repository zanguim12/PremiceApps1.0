import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilleProduitRoutingModule } from './famille-produit-routing.module';
import { FamilleProduitComponent } from './famille-produit/famille-produit.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FamilleProduitRoutingModule,
  ],
  exports:[
    FamilleProduitRoutingModule,
  ]
})
export class FamilleProduitModule { }
