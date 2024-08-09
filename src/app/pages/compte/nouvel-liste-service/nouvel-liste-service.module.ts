import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouvelListeServiceRoutingModule } from './nouvel-liste-service-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NouvelListeServiceRoutingModule
  ],
  exports: [
    NouvelListeServiceRoutingModule,
  ]
})
export class NouvelListeServiceModule { }
