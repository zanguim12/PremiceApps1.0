import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MaterialModule } from '../../../../../shared/material.module';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FournisseurService } from './services/fournisseur.service';
import { Fournisseur } from './models/fournisseur';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    CardModule,
    PanelModule,
    InputTextModule,
    DataViewModule,
    ButtonModule
  ],
  providers: [FournisseurService],
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  value!: string;
  fournisseur!: Fournisseur[];

  constructor(private FournisseurService: FournisseurService) {}

  ngOnInit() {
    this.FournisseurService.getFournisseur().then((data) => (this.fournisseur = data.slice(0, 10)));
  }

  getSeverity(user: Fournisseur) {
    switch (user.status) {
      case 0:
        return 'success';
      case 1:
        return 'warning';
      default:
        return null;
    }
  }
}
