import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementTicketRoutingModule } from './reglement-ticket-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReglementTicketRoutingModule
  ],
  exports: [
    ReglementTicketRoutingModule
  ]
})
export class ReglementTicketModule { }
