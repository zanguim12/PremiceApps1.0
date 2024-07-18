import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputTextModule,
    AngularSvgIconModule,
    FormsModule,
    CoreModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private iconRegistry: SvgIconRegistryService) {
    this.iconRegistry.loadSvg('assets/icons/logo.svg');
  }
}
