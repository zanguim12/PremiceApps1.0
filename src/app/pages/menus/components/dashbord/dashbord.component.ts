import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CardModule } from 'primeng/card';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [AngularSvgIconModule, CardModule],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Vous pouvez ajouter d'autres logiques ici si nécessaire
    }
  }

  toggleActive(value: string) {
    if (!this.isBrowser) return;

    // Votre logique pour changer l'état
    if (value === 'month') {
      document.querySelector('.chart-income.month')?.classList.add('active');
      document.querySelector('.chart-income.week')?.classList.remove('active');
    } else {
      document.querySelector('.chart-income.week')?.classList.add('active');
      document.querySelector('.chart-income.month')?.classList.remove('active');
    }
  }
}
