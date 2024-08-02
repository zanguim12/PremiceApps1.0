import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance-routing.module').then(m => m.MaintenanceRoutingModule) // Charger le module Composantes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavRoutingModule { }
