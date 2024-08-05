import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommerceRoutingModule
  ],
  exports:[
    CommerceRoutingModule,
  ]
})
export class CommerceModule { }
