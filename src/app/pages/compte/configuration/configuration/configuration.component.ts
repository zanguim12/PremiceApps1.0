import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {

  logoOnly: boolean = false;
  footerOnly: boolean = false;
  nothingAtAll: boolean = false;
  headerOnly: boolean = false;
  headerAndFooter: boolean = true;
  slogan: string = '';
  structureName: string = '';
  accountNumber: string = '';

  saveDetails() {}

}
