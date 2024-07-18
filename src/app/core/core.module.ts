import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarMenuComponent } from './component/side-bar/sidebar-menu/sidebar-menu.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { SidebarSubmenuComponent } from './component/side-bar/sidebar-submenu/sidebar-submenu.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    SidebarSubmenuComponent,
    SidebarMenuComponent,
    NavBarComponent,
    FooterComponent,
  ],
  exports: [
    SideBarComponent,
    SidebarSubmenuComponent,
    SidebarMenuComponent,
    NavBarComponent,
    FooterComponent
    ]
})
export class CoreModule { }
