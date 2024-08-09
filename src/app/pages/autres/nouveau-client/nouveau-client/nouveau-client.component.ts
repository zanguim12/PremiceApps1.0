import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nouveau-client',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nouveau-client.component.html',
  styleUrl: './nouveau-client.component.scss'
})
export class NouveauClientComponent {

  clients = [
    { name: 'WAKO', code: '210189YPZ46WJ7' },
    { name: 'PAC INTERNATIONAL', code: '2109WSQZJR4QX' },
    { name: 'LYCEE DE MOUANKO', code: '21010SK779M69X' },
    { name: 'BAD', code: '210T13DVEEX700' },
    { name: 'CABINET LE GRAND CONSEIL', code: '2105EKJINDWOM' },
    { name: 'MAH FRANCISCO', code: '210WILLUTYNI' },
    { name: 'NDONGO', code: '21227TPHSUL5AL' },
    { name: 'CENTRE MEDICAL INNEL', code: '211M80KEX645T0' },
    { name: 'AGORA CONSULTING', code: '211JZSCLEFEU6M' },
    { name: 'COMMUNAUTE SAINT ROZAIRE DE MBALIMAYO', code: '212FBKXG3XUKUO' }
  ];

}
