import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import packageJson from '../../../../../package.json';
import { MenuService } from './services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SideBarComponent,NgFor,NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarMenuComponent,
],

  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    console.log("hello");
    this.menuService.toggleSidebar();
  }
}
