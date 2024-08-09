import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nouveau-client',
    loadChildren: () => import('./nouveau-client/nouveau-client-routing.module').then(m => m.NouveauClientRoutingModule) // Charger le module Composantes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutresRoutingModule { }
