import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import packageJson from '../../../../../package.json'
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
    this.menuService.toggleSidebar();
  }
}
