import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDigitalRoutingModule } from './service-digital-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceDigitalRoutingModule
  ],
  exports: [
    ServiceDigitalRoutingModule
  ]
})
export class ServiceDigitalModule { }
