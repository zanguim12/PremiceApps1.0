import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FournisseurRoutingModule
  ],
  exports:[
    FournisseurRoutingModule
  ]
})
export class FournisseurModule { }
