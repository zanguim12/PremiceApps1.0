import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauClientComponent } from './nouveau-client/nouveau-client.component';

const routes: Routes = [
  { path: '', component: NouveauClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouveauClientRoutingModule { }
