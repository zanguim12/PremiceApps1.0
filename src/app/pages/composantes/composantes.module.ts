import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposantesRoutingModule } from './composantes-routing.module';
import { CommerceComponent } from './components/commerce/commerce.component';
import { ComptabiliteComponent } from './components/comptabilite/comptabilite.component';
import { SavComponent } from './components/sav/sav.component';
import { ServiceDigitalComponent } from './components/service-digital/service-digital.component';
import { StockComponent } from './components/stock/stock.component';
import { MaterialModule } from '../../shared/material.module';
import { SideBarComponent } from '../../core/component/side-bar/side-bar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComposantesRoutingModule,
    CommerceComponent,
    ComptabiliteComponent,
    SavComponent,
    ServiceDigitalComponent,
    StockComponent,
    MaterialModule,
    SideBarComponent
  ],
  exports:[
    ComposantesRoutingModule,
    CommerceComponent,
    ComptabiliteComponent,
    SavComponent,
    ServiceDigitalComponent,
    StockComponent,
    MaterialModule,
    SideBarComponent
  ]
})
export class ComposantesModule { }
