import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MouvementEntreSortieRoutingModule } from './mouvement-entre-sortie-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MouvementEntreSortieRoutingModule
  ],
  exports: [
    MouvementEntreSortieRoutingModule
  ]
})
export class MouvementEntreSortieModule { }
