import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusRoutingModule } from './menus-routing.module';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SideBarComponent } from '../../core/component/side-bar/side-bar.component';
import { MaterialModule } from '../../shared/material.module';
import { AppsModule } from './components/apps/apps.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenusRoutingModule,
    DashbordComponent,
    ArticlesComponent,
    SideBarComponent,
    MaterialModule,
    AppsModule
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
