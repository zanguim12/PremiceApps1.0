import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertStockRoutingModule } from './alert-stock-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertStockRoutingModule
  ],
  exports: [
    AlertStockRoutingModule
  ]
})
export class AlertStockModule { }
