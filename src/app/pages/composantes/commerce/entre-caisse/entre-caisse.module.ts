import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreCaisseRoutingModule } from './entre-caisse-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntreCaisseRoutingModule
  ],
  exports: [
    EntreCaisseRoutingModule
  ]
})
export class EntreCaisseModule { }
