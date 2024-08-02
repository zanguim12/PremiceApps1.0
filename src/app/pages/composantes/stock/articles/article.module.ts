import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  exports:[
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
