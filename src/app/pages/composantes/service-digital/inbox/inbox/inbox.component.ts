import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { MaterialModule } from '../../../../../shared/material.module';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PanelModule,
    CardModule,
    DividerModule
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  selectedFolder: string = 'inbox'; // Default selected folder

  selectFolder(folder: string) {
    this.selectedFolder = folder; // Update the selected folder
  }

}
