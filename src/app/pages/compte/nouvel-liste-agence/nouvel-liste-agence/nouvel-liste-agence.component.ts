import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nouvel-liste-agence',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './nouvel-liste-agence.component.html',
  styleUrl: './nouvel-liste-agence.component.scss'
})
export class NouvelListeAgenceComponent {
  agences = [
    { name: 'Agence Computer', code: '211M2DLSSXL', logoUrl: 'https://openui.fly.dev/openui/24x24.svg?text=🏢' },
    { name: 'Computer VIP', code: '23VIASBYCV2', logoUrl: 'https://openui.fly.dev/openui/24x24.svg?text=🏢' },
    { name: 'Agence Douala', code: '2INYQ129BRO', logoUrl: 'https://openui.fly.dev/openui/24x24.svg?text=🏢' },
    { name: 'COMPUTER SAV', code: '24GVF4CK84P', logoUrl: 'https://openui.fly.dev/openui/24x24.svg?text=🏢' },
    { name: 'Agence Informatique', code: '2IT9RTHCSNH', logoUrl: 'https://openui.fly.dev/openui/24x24.svg?text=🏢' },
  ];

  editAgence(agence: any) {
    // Handle edit action
    // console.log('Editing:', agence);
  }

  viewAgence(agence: any) {
    // Handle view action
    // console.log('Viewing:', agence);
  }
}
