import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportDetteRoutingModule } from './rapport-dette-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RapportDetteRoutingModule
  ],
  exports: [
    RapportDetteRoutingModule
  ]
})
export class RapportDetteModule { }
