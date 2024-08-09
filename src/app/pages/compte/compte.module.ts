import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompteRoutingModule
  ],
  exports: [
    CompteRoutingModule,
  ]
})
export class CompteModule { }
