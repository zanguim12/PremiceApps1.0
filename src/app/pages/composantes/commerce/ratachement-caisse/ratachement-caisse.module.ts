import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatachementCaisseRoutingModule } from './ratachement-caisse-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatachementCaisseRoutingModule
  ],
  exports: [
    RatachementCaisseRoutingModule
  ]
})
export class RatachementCaisseModule { }
