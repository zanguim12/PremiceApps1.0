import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelListeAgenceComponent } from './nouvel-liste-agence/nouvel-liste-agence.component';

const routes: Routes = [
  { path: '', component: NouvelListeAgenceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouvelListeAgenceRoutingModule { }
