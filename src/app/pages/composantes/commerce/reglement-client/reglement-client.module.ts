import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementClientRoutingModule } from './reglement-client-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReglementClientRoutingModule
  ],
  exports: [
    ReglementClientRoutingModule
  ]
})
export class ReglementClientModule { }
