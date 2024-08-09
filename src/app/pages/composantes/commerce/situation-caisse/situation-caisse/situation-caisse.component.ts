import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-situation-caisse',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './situation-caisse.component.html',
  styleUrl: './situation-caisse.component.scss'
})
export class SituationCaisseComponent {

  periods = ['Period 1', 'Period 2'];
  data = [
    { date: '01/01/2024', numero: '', client: 'Total général des mouvements de la période', libelle: '', debit: '0.00 XAF', credit: '0.00 XAF' },
    { date: '', numero: '', client: 'Solde de la période', libelle: '', debit: '0.00 XAF', credit: '' },
    { date: '', numero: '', client: 'Solde Total en caisse', libelle: '', debit: '0.00 XAF', credit: '' },
  ];

}
