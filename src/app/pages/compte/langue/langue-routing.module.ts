import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangueComponent } from './langue/langue.component';

const routes: Routes = [
  { path: '', component: LangueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LangueRoutingModule { }
