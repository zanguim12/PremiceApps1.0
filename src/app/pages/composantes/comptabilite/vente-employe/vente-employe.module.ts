import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteEmployeRoutingModule } from './vente-employe-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VenteEmployeRoutingModule
  ],
  exports: [
    VenteEmployeRoutingModule
  ]
})
export class VenteEmployeModule { }
