import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taxes-heures-clotures',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './taxes-heures-clotures.component.html',
  styleUrl: './taxes-heures-clotures.component.scss'
})
export class TaxesHeuresCloturesComponent {

  taxes = [
    { name: 'IR (-2.2%)', code: '21019B54MQ5A', icon: '' },
    { name: 'TVA (19.25%)', code: '21WMINCOXU9P', icon: '' }
  ];

}
