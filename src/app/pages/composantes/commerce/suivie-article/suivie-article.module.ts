import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuivieArticleRoutingModule } from './suivie-article-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuivieArticleRoutingModule
  ],
  exports: [
    SuivieArticleRoutingModule
  ]
})
export class SuivieArticleModule { }
