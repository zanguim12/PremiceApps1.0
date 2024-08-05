import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonRetourComponent } from './bon-retour/bon-retour.component';

const routes: Routes = [
  { path: '', component: BonRetourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonRetourRoutingModule { }
