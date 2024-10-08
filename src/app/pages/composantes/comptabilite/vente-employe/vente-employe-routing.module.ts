import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenteEmployeComponent } from './vente-employe/vente-employe.component';

const routes: Routes = [
  { path: '', component: VenteEmployeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteEmployeRoutingModule { }
