import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfertStockComponent } from './transfert-stock/transfert-stock.component';

const routes: Routes = [
  { path: '', component: TransfertStockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfertStockRoutingModule { }
