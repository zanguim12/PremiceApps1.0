import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointPrixRoutingModule } from './point-prix-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PointPrixRoutingModule
  ],
  exports: [
    PointPrixRoutingModule,
  ]
})
export class PointPrixModule { }
