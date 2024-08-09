import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MaterialModule } from '../../../../../shared/material.module';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-ratachement-banque',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    MaterialModule,
    DropdownModule
  ],
  templateUrl: './ratachement-banque.component.html',
  styleUrl: './ratachement-banque.component.scss'
})
export class RatachementBanqueComponent {

  clients = ['Client 1', 'Client 2'];
  invoices = ['Invoice 1', 'Invoice 2'];

}
