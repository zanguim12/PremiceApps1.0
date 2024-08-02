import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vente-employe',
    loadChildren: () => import('./vente-employe/vente-employe-routing.module').then(m => m.VenteEmployeRoutingModule)
   },
   {
    path: 'achat-client',
    loadChildren: () => import('./achat-client/achat-client-routing.module').then(m => m.AchatClientRoutingModule)
   },
   {
    path: 'alert-facture',
    loadChildren: () => import('./alert-facture/alert-facture-routing.module').then(m => m.AlertFactureRoutingModule)
   },
   {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce-routing.module').then(m => m.AnnonceRoutingModule)
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptabiliteRoutingModule { }
