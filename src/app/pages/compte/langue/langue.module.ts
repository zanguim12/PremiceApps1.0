import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LangueRoutingModule } from './langue-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LangueRoutingModule
  ],
  exports:[
    LangueRoutingModule,
  ]
})
export class LangueModule { }
