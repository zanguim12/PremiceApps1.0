import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoreModule } from '../../../../../core/core.module';
import { CardModule } from 'primeng/card';
import { MaterialModule } from '../../../../../shared/material.module';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-ratachement-caisse',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    MaterialModule,
    DropdownModule
  ],
  templateUrl: './ratachement-caisse.component.html',
  styleUrl: './ratachement-caisse.component.scss'
})
export class RatachementCaisseComponent {

  clients = ['Client 1', 'Client 2'];
  invoices = ['Invoice 1', 'Invoice 2'];

}
