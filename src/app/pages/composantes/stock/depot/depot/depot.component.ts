import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { MaterialModule } from '../../../../../shared/material.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Depot } from './models/depot.model';
import { DepotService } from './services/depot.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    MaterialModule,
    CardModule,
    TableModule,
    InputTextModule
  ],
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss'] // Correction ici
})
export class DepotComponent {
  depots!: Depot[];
  value!: string;

  constructor(private depotService: DepotService) {}

  ngOnInit() {
    this.depotService.getArticlesMini().then((data) => {
      this.depots = data;
    });
  }
}
