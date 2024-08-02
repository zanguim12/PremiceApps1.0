import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaireRoutingModule } from './inventaire-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InventaireRoutingModule
  ],
  exports: [
    InventaireRoutingModule
  ]
})
export class InventaireModule { }
