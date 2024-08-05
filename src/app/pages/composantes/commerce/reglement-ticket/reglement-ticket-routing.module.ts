import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglementTicketComponent } from './reglement-ticket/reglement-ticket.component';

const routes: Routes = [
  { path: '', component: ReglementTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementTicketRoutingModule { }
