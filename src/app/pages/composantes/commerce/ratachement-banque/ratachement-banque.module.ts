import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatachementBanqueRoutingModule } from './ratachement-banque-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatachementBanqueRoutingModule
  ],
  exports:[
    RatachementBanqueRoutingModule
  ]
})
export class RatachementBanqueModule { }
