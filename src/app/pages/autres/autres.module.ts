import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutresRoutingModule } from './autres-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutresRoutingModule
  ],
  exports: [
    AutresRoutingModule,
  ]
})
export class AutresModule { }
