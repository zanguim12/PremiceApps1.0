import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelListeAgenceModule } from './nouvel-liste-agence/nouvel-liste-agence.module';

const routes: Routes = [
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration-routing.module').then(m => m.ConfigurationRoutingModule) // Charger le module Composantes
  },
  {
    path: 'configuration-messages',
    loadChildren: () => import('./configuration-messages/configuration-messages-routing.module').then(m => m.ConfigurationMessagesRoutingModule) // Charger le module Composantes
  },
  {
    path: 'nouvel-liste-agence',
    loadChildren: () => import('./nouvel-liste-agence/nouvel-liste-agence-routing.module').then(m => m.NouvelListeAgenceRoutingModule) // Charger le module Composantes
  },
  {
    path: 'nouvel-liste-service',
    loadChildren: () => import('./nouvel-liste-service/nouvel-liste-service-routing.module').then(m => m.NouvelListeServiceRoutingModule) // Charger le module Composantes
  },
  {
    path: 'type-liste-documents',
    loadChildren: () => import('./type-liste-documents/type-liste-documents-routing.module').then(m => m.TypeListeDocumentsRoutingModule) // Charger le module Composantes
  },
  {
    path: 'liste-caisse',
    loadChildren: () => import('./liste-caisse/liste-caisse-routing.module').then(m => m.ListeCaisseRoutingModule) // Charger le module Composantes
  },
  {
    path: 'taxes-heures-clotures',
    loadChildren: () => import('./taxes-heures-clotures/taxes-heures-clotures-routing.module').then(m => m.TaxesHeuresCloturesRoutingModule) // Charger le module Composantes
  },
  {
    path: 'point-prix',
    loadChildren: () => import('./point-prix/point-prix-routing.module').then(m => m.PointPrixRoutingModule) // Charger le module Composantes
  },
  {
    path: 'langue',
    loadChildren: () => import('./langue/langue-routing.module').then(m => m.LangueRoutingModule) // Charger le module Composantes
  },
  {
    path: 'inside',
    loadChildren: () => import('./inside/inside-routing.module').then(m => m.InsideRoutingModule) // Charger le module Composantes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }
