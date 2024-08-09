import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-configuration-message',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
  ],
  templateUrl: './configuration-message.component.html',
  styleUrl: './configuration-message.component.scss'
})
export class ConfigurationMessageComponent {

  messageConfigs = [
    {
      entreprise: 'PREMICE COMPUTER SARL',
      nombreMessage: 100,
      creerPar: 'USERB',
      date: '26-04-2022 21:51:10'
    }
  ];

}
