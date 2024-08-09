import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelListeServiceComponent } from './nouvel-liste-service/nouvel-liste-service.component';

const routes: Routes = [
  { path: '', component: NouvelListeServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouvelListeServiceRoutingModule {
}
