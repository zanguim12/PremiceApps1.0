import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortieCaisseRoutingModule } from './sortie-caisse-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SortieCaisseRoutingModule
  ],
  exports: [
    SortieCaisseRoutingModule
  ]
})
export class SortieCaisseModule { }
