import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreCaisseComponent } from './entre-caisse/entre-caisse.component';

const routes: Routes = [
  { path: '', component: EntreCaisseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreCaisseRoutingModule { }
