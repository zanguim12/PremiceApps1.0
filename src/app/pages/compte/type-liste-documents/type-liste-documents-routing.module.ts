import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeListeDocumentsComponent } from './type-liste-documents/type-liste-documents.component';

const routes: Routes = [
  { path: '', component: TypeListeDocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeListeDocumentsRoutingModule { }
