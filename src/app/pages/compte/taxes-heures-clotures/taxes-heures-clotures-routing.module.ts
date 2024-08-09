import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxesHeuresCloturesComponent } from './taxes-heures-clotures/taxes-heures-clotures.component';

const routes: Routes = [
  { path: '', component: TaxesHeuresCloturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesHeuresCloturesRoutingModule { }
