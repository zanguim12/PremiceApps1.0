import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox-routing.module').then(m => m.InboxRoutingModule) // Charger le module Composantes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDigitalRoutingModule { }
