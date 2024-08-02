import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouvementEntreSortieComponent } from './mouvement-entre-sortie/mouvement-entre-sortie.component';

const routes: Routes = [
  {path: '', component: MouvementEntreSortieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MouvementEntreSortieRoutingModule { }
