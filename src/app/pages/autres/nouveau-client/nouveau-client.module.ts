import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouveauClientRoutingModule } from './nouveau-client-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NouveauClientRoutingModule
  ],
  exports: [
    NouveauClientRoutingModule,
  ]
})
export class NouveauClientModule { }
