import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavRoutingModule } from './sav-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SavRoutingModule
  ],
  exports:[
    SavRoutingModule
  ]
})
export class SavModule { }
