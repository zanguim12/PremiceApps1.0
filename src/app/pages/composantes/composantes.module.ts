import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposantesRoutingModule } from './composantes-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { SideBarComponent } from '../../core/component/side-bar/side-bar.component';
import { CommerceModule } from './commerce/commerce.module';
import { SavModule } from './sav/sav.module';
import { StockModule } from './stock/stock.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComposantesRoutingModule,
    MaterialModule,
    CommerceModule,
    SavModule,
    StockModule,
    SideBarComponent
  ],
  exports:[
    ComposantesRoutingModule,
    MaterialModule,
    SideBarComponent
  ]
})
export class ComposantesModule { }
