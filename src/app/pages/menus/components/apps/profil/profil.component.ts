import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    CardModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {


  employeeForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone1: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      phone2: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      date_naiss: ['', Validators.required],
      fonction:['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.loading = true;
      // Simulate form submission
      setTimeout(() => {
        console.log('Form data:', this.employeeForm.value);
        this.loading = false;
      }, 2000);
    }
  }

  }

