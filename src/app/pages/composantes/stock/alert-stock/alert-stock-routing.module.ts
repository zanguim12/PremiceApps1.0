import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertStockComponent } from './alert-stock/alert-stock.component';

const routes: Routes = [
  {path: '', component: AlertStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertStockRoutingModule { }
