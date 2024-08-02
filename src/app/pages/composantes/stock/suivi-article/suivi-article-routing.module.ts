import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiviArticleComponent } from './suivi-article/suivi-article.component';

const routes: Routes = [
  { path: '', component: SuiviArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviArticleRoutingModule { }
