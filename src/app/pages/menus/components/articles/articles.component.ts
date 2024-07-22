import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { MaterialModule } from '../../../../shared/material.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    MaterialModule,
    CardModule,
    TableModule,
    InputTextModule
  ],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'] // Correction ici
})
export class ArticlesComponent {
  articles!: Article[];
  value!: string;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesMini().then((data) => {
      this.articles = data;
    });
  }
}
