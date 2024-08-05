import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatachementCaisseComponent } from './ratachement-caisse/ratachement-caisse.component';

const routes: Routes = [
  { path: '', component: RatachementCaisseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatachementCaisseRoutingModule { }
