import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertFactureComponent } from './alert-facture/alert-facture.component';

const routes: Routes = [
  { path: '', component: AlertFactureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertFactureRoutingModule { }
