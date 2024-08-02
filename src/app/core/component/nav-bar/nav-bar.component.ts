import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MaterialModule } from '../../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MenubarModule,
    MaterialModule,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
