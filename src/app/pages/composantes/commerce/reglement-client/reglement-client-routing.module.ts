import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglementClientComponent } from './reglement-client/reglement-client.component';

const routes: Routes = [
  { path: '', component: ReglementClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementClientRoutingModule { }
