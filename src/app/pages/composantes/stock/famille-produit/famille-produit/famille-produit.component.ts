import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-famille-produit',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './famille-produit.component.html',
  styleUrl: './famille-produit.component.scss'
})
export class FamilleProduitComponent {

  familles = [
    { name: 'IMPRIMANTE HP', code: '213N9QKD4GH8' },
    { name: 'TONER HP', code: '219M48PLJFGT' },
    { name: 'CANON COPIEUR', code: '21MIFPINDDOGS' },
    { name: 'CANON LASER', code: '21KDEPLNDJDIR' },
    { name: 'EPSON SCAN', code: '21IDEPNDKDIDJ' }
  ];

  constructor() {}

}
