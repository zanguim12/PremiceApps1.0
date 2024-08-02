import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfertStockRoutingModule } from './transfert-stock-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TransfertStockRoutingModule
  ],
  exports: [
    TransfertStockRoutingModule
  ]
})
export class TransfertStockModule { }
