import { ServiceDigitalComponent } from './components/service-digital/service-digital.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommerceComponent } from './components/commerce/commerce.component';
import { ComptabiliteComponent } from './components/comptabilite/comptabilite.component';
import { SavComponent } from './components/sav/sav.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [

  { path: 'commerce', component: CommerceComponent },
  { path: 'comptabilite', component: ComptabiliteComponent },
  { path: 'sav', component: SavComponent },
  { path: 'service-digital', component: ServiceDigitalComponent },
  { path: 'stock', component: StockComponent },
  //{ path: '', redirectTo: 'commerce', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposantesRoutingModule { }
