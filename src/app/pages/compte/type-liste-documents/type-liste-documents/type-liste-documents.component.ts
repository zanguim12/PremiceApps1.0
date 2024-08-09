import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-type-liste-documents',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './type-liste-documents.component.html',
  styleUrl: './type-liste-documents.component.scss'
})
export class TypeListeDocumentsComponent {

}
