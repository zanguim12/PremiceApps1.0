import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortieCaisseComponent } from './sortie-caisse/sortie-caisse.component';

const routes: Routes = [
  { path: '', component: SortieCaisseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortieCaisseRoutingModule { }
