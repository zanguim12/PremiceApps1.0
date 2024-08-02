import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'famille-produit',
    loadChildren: () => import('./famille-produit/famille-produit-routing.module').then(m => m.FamilleProduitRoutingModule) // Charger le module Composantes
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/article-routing.module').then(m => m.ArticleRoutingModule) // Charger le module Composantes
  },
  {
    path: 'fournisseur',
    loadChildren: () => import('./fournisseur/fournisseur-routing.module').then(m => m.FournisseurRoutingModule) // Charger le module Composantes
  },
  {
    path: 'depot',
    loadChildren: () => import('./depot/depot-routing.module').then(m => m.DepotRoutingModule) // Charger le module Composantes
  },
  {
    path: 'entre-stock',
    loadChildren: () => import('./entre-stock/entre-stock-routing.module').then(m => m.EntreStockRoutingModule)
  },
  {
    path: 'mouvement-entre-sortie',
    loadChildren: () => import('./mouvement-entre-sortie/mouvement-entre-sortie-routing.module').then((m: any) => m.MouvementEntreSortieRoutingModule)
  },
  {
    path: 'transfert-stock',
    loadChildren: () => import('./transfert-stock/transfert-stock-routing.module').then(m => m.TransfertStockRoutingModule)
  },
  {
    path: 'inventaire',
    loadChildren: () => import('./inventaire/inventaire-routing.module').then(m => m.InventaireRoutingModule)
  },
  {
    path: 'alert-stock',
    loadChildren: () => import('./alert-stock/alert-stock-routing.module').then((m: { AlertStockRoutingModule: any }) => m.AlertStockRoutingModule)
  },
  {
    path: 'suivi-article',
    loadChildren: () => import('./suivi-article/suivi-article-routing.module').then(m => m.SuiviArticleRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
