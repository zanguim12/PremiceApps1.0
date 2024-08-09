import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointPrixComponent } from './point-prix/point-prix.component';

const routes: Routes = [
  { path: '', component: PointPrixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointPrixRoutingModule { }
