import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MaterialModule } from '../../../../../shared/material.module';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { NewUserService } from './services/new-user.service';
import { NewUser } from './models/new-user.model';
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
  providers: [NewUserService],
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  value!: string;
  newUsers!: NewUser[];

  constructor(private newUserService: NewUserService) {}

  ngOnInit() {
    this.newUserService.getNewUsers().then((data) => (this.newUsers = data.slice(0, 5)));
  }

  getSeverity(user: NewUser) {
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
