import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { SituationCaisseComponent } from './situation-caisse/situation-caisse.component';

const routes: Routes = [
  { path: '', component: SituationCaisseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SituationCaisseRoutingModule { }
