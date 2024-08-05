import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatachementBanqueComponent } from './ratachement-banque/ratachement-banque.component';

const routes: Routes = [
  { path:'', component: RatachementBanqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatachementBanqueRoutingModule { }
