import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatClientComponent } from './achat-client/achat-client.component';

const routes: Routes = [
  { path: '', component: AchatClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatClientRoutingModule { }
