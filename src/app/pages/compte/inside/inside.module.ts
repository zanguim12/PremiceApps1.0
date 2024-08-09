import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InsideRoutingModule
  ],
  exports: [
    InsideRoutingModule,
  ]
})
export class InsideModule { }
