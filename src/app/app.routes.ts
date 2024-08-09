import { Routes } from '@angular/router';

export const routes: Routes = [
  /*{ path: 'dashbord', loadChildren: () => import('./pages/menus/menus.module').then(m => m.MenusModule) },
  { path: 'articles', loadChildren: () => import('./pages/menus/menus.module').then(m => m.MenusModule) },
  { path: 'apps', loadChildren: () => import('./pages/menus/menus.module').then(m => m.MenusModule) },

  { path: 'commerce', loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) },
  { path: 'comptabilite', loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) },
  { path: 'sav', loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) },
  { path: 'service-digital', loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) },
  { path: 'stock', loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) },
 { path: '**', redirectTo: 'dashbord' }  // Assurez-vous que 'side-bar' est une route valide, sinon redirigez vers une route existante comme 'dashbord'
*/
{
  path: 'menus',
  loadChildren: () => import('./pages/menus/menus.module').then(m => m.MenusModule) // Charger le module Menus
},
{
  path: 'composantes',
  loadChildren: () => import('./pages/composantes/composantes.module').then(m => m.ComposantesModule) // Charger le module Composantes
},
{
  path: 'autres',
  loadChildren: () => import('./pages/autres/autres.module').then(m => m.AutresModule) // Charger le module Composantes
},

{
  path: 'compte',
  loadChildren: () => import('./pages/compte/compte.module').then(m => m.CompteModule) // Charger le module Composantes
},

 { path: '**', redirectTo: 'menus' }

];
