import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouvelListeAgenceRoutingModule } from './nouvel-liste-agence-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NouvelListeAgenceRoutingModule
  ],
  exports: [
    NouvelListeAgenceRoutingModule,
  ]
})
export class NouvelListeAgenceModule { }
