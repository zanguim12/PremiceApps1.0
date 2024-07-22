import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
