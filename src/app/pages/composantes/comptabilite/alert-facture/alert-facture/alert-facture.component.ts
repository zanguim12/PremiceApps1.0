import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-alert-facture',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './alert-facture.component.html',
  styleUrl: './alert-facture.component.scss'
})
export class AlertFactureComponent {

}
