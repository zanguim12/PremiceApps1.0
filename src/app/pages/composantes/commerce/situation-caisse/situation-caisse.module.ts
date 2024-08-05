import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SituationCaisseRoutingModule } from './situation-caisse-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SituationCaisseRoutingModule
  ],
  exports: [
    SituationCaisseRoutingModule
  ]
})
export class SituationCaisseModule { }
