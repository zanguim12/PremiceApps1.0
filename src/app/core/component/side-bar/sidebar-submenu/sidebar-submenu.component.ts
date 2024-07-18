import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../models/menu.model';
import { MenuService } from '../services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-sidebar-submenu',
    templateUrl: './sidebar-submenu.component.html',
    styleUrls: ['./sidebar-submenu.component.scss'],
    standalone: true,
    imports: [
      NgFor,NgClass,
      AngularSvgIconModule,
      NgTemplateOutlet,
      RouterLink,
      RouterLinkActive,
      NgIf,
    ],
    providers:[AngularSvgIconModule]
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
