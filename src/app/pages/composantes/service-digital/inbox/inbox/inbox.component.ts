import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
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

}
