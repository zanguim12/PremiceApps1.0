import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-vente-employe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    TableModule
  ],
  templateUrl: './vente-employe.component.html',
  styleUrl: './vente-employe.component.scss'
})
export class VenteEmployeComponent {

  employees = [
    { label: 'Employee 1', value: '1' },
    { label: 'Employee 2', value: '2' },
    // Add more options as needed
  ];

  startDate!: Date;
  endDate!: Date;

  salesData = [
    { client: 'Client 1', cashDirect: 1000, debt: 500, payment: 1500 },
    { client: 'Client 2', cashDirect: 2000, debt: 700, payment: 2700 },
    // Add more data as needed
  ];

}
