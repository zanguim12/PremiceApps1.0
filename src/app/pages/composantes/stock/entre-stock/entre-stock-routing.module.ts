import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreStockComponent } from './entre-stock/entre-stock.component';

const routes: Routes = [
  {path: '', component: EntreStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreStockRoutingModule { }
