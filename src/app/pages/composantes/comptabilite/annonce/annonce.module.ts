import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ],
  exports: [
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
