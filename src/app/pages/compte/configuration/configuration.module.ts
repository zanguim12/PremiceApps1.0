import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ],
  exports: [
    ConfigurationRoutingModule,
  ]
})
export class ConfigurationModule { }
