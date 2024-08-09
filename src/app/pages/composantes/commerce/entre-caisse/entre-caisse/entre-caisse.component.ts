import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-entre-caisse',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    TableModule,
    FormsModule
  ],
  templateUrl: './entre-caisse.component.html',
  styleUrl: './entre-caisse.component.scss'
})
export class EntreCaisseComponent {

}
