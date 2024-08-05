import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProformatComponent } from './proformat/proformat.component';

const routes: Routes = [
  { path: '', component: ProformatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProformatRoutingModule { }
