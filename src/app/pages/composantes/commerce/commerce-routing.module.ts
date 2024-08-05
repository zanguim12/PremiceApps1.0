import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bon-livraison',
    loadChildren: () => import('./bon-livraison/bon-livraison-routing.module').then(m => m.BonLivraisonRoutingModule)
   },
   {
    path: 'bon-retour',
    loadChildren: () => import('./bon-retour/bon-retour-routing.module').then(m => m.BonRetourRoutingModule)
   },
   {
    path: 'entre-caisse',
    loadChildren: () => import('./entre-caisse/entre-caisse-routing.module').then(m => m.EntreCaisseRoutingModule)
   },
   {
    path: 'proformat',
    loadChildren: () => import('./proformat/proformat-routing.module').then(m => m.ProformatRoutingModule)
   },
   {
    path: 'rapport-dette',
    loadChildren: () => import('./rapport-dette/rapport-dette-routing.module').then(m => m.RapportDetteRoutingModule)
   },
   {
    path: '',
    loadChildren: () => import('./ratachement-banque/ratachement-banque-routing.module').then(m => m.RatachementBanqueRoutingModule)
   },
   {
    path: 'ratachement-caisse',
    loadChildren: () => import('./ratachement-caisse/ratachement-caisse-routing.module').then(m => m.RatachementCaisseRoutingModule)
   },
   {
    path: 'reglement-ticket',
    loadChildren: () => import('./reglement-ticket/reglement-ticket-routing.module').then(m => m.ReglementTicketRoutingModule)
   },
   {
    path: 'reglement-client',
    loadChildren: () => import('./reglement-client/reglement-client-routing.module').then(m => m.ReglementClientRoutingModule)
   },
   {
    path: 'situation-caisse',
    loadChildren: () => import('./situation-caisse/situation-caisse-routing.module').then(m => m.SituationCaisseRoutingModule)
   },
   {
    path: 'sortie-caisse',
    loadChildren: () => import('./sortie-caisse/sortie-caisse-routing.module').then(m => m.SortieCaisseRoutingModule)
   },
   {
    path: 'suivie-article',
    loadChildren: () => import('./suivie-article/suivie-article-routing.module').then(m => m.SuivieArticleRoutingModule)
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
