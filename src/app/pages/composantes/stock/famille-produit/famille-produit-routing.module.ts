import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilleProduitComponent } from './famille-produit/famille-produit.component';

const routes: Routes = [
  { path: '', component: FamilleProduitComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilleProduitRoutingModule { }
