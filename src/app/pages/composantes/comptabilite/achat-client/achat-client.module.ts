import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchatClientRoutingModule } from './achat-client-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AchatClientRoutingModule
  ],
  exports: [
    AchatClientRoutingModule
  ]
})
export class AchatClientModule { }
