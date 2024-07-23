// src/app/pages/menus/components/apps/profil/profil.component.ts
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material.module';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PanelModule,
    CardModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
