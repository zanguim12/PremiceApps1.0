import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ArticlesComponent } from './components/articles/articles.component';


export const routes: Routes = [
  { path: 'dashbord', component: DashbordComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'apps',
    loadChildren: () => import('./components/apps/apps-routing.module').then(m => m.AppsRoutingModule) // Charger les routes des composants new-user et profils
  },
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
