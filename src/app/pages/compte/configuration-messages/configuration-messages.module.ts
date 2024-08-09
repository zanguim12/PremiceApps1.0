import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationMessagesRoutingModule } from './configuration-messages-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationMessagesRoutingModule
  ],
  exports: [
    ConfigurationMessagesRoutingModule,
  ]
})
export class ConfigurationMessagesModule { }
