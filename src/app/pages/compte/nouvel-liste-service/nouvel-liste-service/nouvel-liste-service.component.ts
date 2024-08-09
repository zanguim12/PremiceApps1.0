import { Component } from '@angular/core';

@Component({
  selector: 'app-nouvel-liste-service',
  standalone: true,
  imports: [

  ],
  templateUrl: './nouvel-liste-service.component.html',
  styleUrl: './nouvel-liste-service.component.scss'
})
export class NouvelListeServiceComponent {

  services = [
    { name: 'COMPTABILITE', id: '213BLF0XC1', icon: '🛠️' },
    { name: 'CAISSE', id: '21GPWTHZJ7', icon: '🛠️' },
    { name: 'SAV', id: '215N46982', icon: '🛠️' },
    { name: 'STOCK', id: '21MXM058T3', icon: '🛠️' },
    { name: 'SD', id: '21GFBWK0JJ', icon: '🛠️' },
    { name: 'COMMERCIAL', id: '21RMVYJAGG', icon: '🛠️' },
  ];

}
