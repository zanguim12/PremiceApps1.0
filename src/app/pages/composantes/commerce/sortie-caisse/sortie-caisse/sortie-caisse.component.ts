import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Document {
  code: string;
  montant: number;
  concerne: string;
  initiateur: string;
  agence: string;
  motif: string;
  date: string;
}

@Component({
  selector: 'app-sortie-caisse',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    InputTextModule
  ],
  templateUrl: './sortie-caisse.component.html',
  styleUrls: ['./sortie-caisse.component.scss']
})
export class SortieCaisseComponent {
  cols: any[];
  documents: Document[];

  constructor() {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'montant', header: 'Montant' },
      { field: 'concerne', header: 'Concerné' },
      { field: 'initiateur', header: 'Initiateur' },
      { field: 'agence', header: 'Agence' },
      { field: 'motif', header: 'Motif' },
      { field: 'date', header: 'Date' },
    ];

    this.documents = [
      { code: 'SC-DOC-24TGFK0K5DBT', montant: 8500, concerne: 'STEVE', initiateur: 'nzoupet marie solange', agence: 'Computer VIP', motif: 'ACHAT PLASTIQUE', date: '06-08-2024 17:38:08' },
      { code: 'SC-DOC-24YS8ML28B1K', montant: 500, concerne: 'HORELIE', initiateur: 'Bouche Myriame', agence: 'Agence Douala', motif: 'TAXI', date: '06-08-2024 17:22:15' },
      { code: 'SC-DOC-24X0HU8J0BCD', montant: 600, concerne: 'CORINE', initiateur: 'Bouche Myriame', agence: 'Agence Douala', motif: 'TAXI', date: '06-08-2024 16:17:05' },
    ];
  }
}
