import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CardModule } from 'primeng/card';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [AngularSvgIconModule, CardModule],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    if (this.isBrowser) {
      const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [{
              label: 'CA Variation',
              data: [200000000, 180000000, 160000000, 140000000, 120000000, 100000000, 80000000, 60000000],
              borderColor: 'rgba(0, 204, 204, 1)',
              backgroundColor: 'rgba(0, 204, 204, 0.2)',
              fill: true,
              tension: 0.4,
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(tickValue, index, ticks) {
                    if (typeof tickValue === 'number') {
                      return tickValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    }
                    return tickValue;
                  }
                }
              }
            }
          }
        });
      }
    }
  }
}
