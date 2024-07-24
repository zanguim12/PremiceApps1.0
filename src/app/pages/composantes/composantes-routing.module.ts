import { ServiceDigitalModule } from './service-digital/service-digital.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'service-digital',
    loadChildren: () => import('./service-digital/service-digital-routing.module').then(m => m.ServiceDigitalRoutingModule) // Charger le module Composantes
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock-routing.module').then(m => m.StockRoutingModule) // Charger le module Composantes
  },
  {
    path: 'sav',
    loadChildren: () => import('./sav/sav-routing.module').then(m => m.SavRoutingModule) // Charger le module Composantes
  },{
    path: 'commerce',
    loadChildren: () => import('./commerce/commerce-routing.module').then(m => m.CommerceRoutingModule) // Charger le module Composantes
  },
  // { path: '**', redirectTo: 'dashbord' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposantesRoutingModule { }
