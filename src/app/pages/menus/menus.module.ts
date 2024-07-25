import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarComponent } from '../../core/component/side-bar/side-bar.component';
import { MaterialModule } from '../../shared/material.module';

import { AppsModule } from './components/apps/apps.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { MenusRoutingModule } from './menus-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenusRoutingModule,
    DashbordComponent,
    ArticlesComponent,
    SideBarComponent,
    MaterialModule,
    AppsModule,
  ],
  exports: [
    DashbordComponent,
    ArticlesComponent,
    AppsModule,
    SideBarComponent,
    MaterialModule,

  ]
})
export class MenusModule { }
