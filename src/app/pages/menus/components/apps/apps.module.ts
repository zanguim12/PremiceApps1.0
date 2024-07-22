import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfilComponent } from './profil/profil.component';
import { MaterialModule } from '../../../../shared/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NewUserComponent,
    ProfilComponent,
    MaterialModule
  ],
  exports:[
    AppsRoutingModule,
    NewUserComponent,
    ProfilComponent,
    MaterialModule
  ],
})
export class AppsModule { }
