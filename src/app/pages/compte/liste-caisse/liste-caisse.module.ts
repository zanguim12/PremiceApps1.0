import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeCaisseRoutingModule } from './liste-caisse-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListeCaisseRoutingModule
  ],
  exports: [
    ListeCaisseRoutingModule,
  ]
})
export class ListeCaisseModule { }
