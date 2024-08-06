import { CardModule } from 'primeng/card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-stock',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './alert-stock.component.html',
  styleUrl: './alert-stock.component.scss'
})
export class AlertStockComponent {

}
