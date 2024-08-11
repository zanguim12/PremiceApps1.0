import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, GridApi, GridReadyEvent, ModuleRegistry } from 'ag-grid-community';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { MaterialModule } from '../../../../shared/material.module';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';



ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    MaterialModule,
    CardModule,
    TableModule,
    InputTextModule,
    AgGridModule
  ],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles!: Article[];
  value!: string;
  selectedArticle: Article | null = null;
  colDefs: ColDef[] = [
    { headerName: 'ID', field: 'id' ,filter:true, checkboxSelection: true,
     },
    { headerName: 'Code', field: 'code',filter:true  },
    { headerName: 'Name', field: 'name',filter:true },
    { headerName: 'Description', field: 'description',filter:true },
    { headerName: 'Image', field: 'image' ,filter:true},
    { headerName: 'Price', field: 'price' ,filter:true},
    { headerName: 'Category', field: 'category' ,filter:true},
    { headerName: 'Quantity', field: 'quantity'  ,filter:true},
    { headerName: 'Inventory Status', field: 'inventoryStatus',filter:true },
    { headerName: 'Rating', field: 'rating',filter:true }
  ];
  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };
  public rowSelection: "single" | "multiple" = "multiple";
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  public themeClass: string =
    "ag-theme-quartz";


    public gridApi!: GridApi;
    onGridReady = (event: GridReadyEvent) => {
        // Store the api for later use
        this.gridApi = event.api;
    }

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesMini().then((data) => {
      this.articles = data;
    });
  }

  viewSelectedArticle() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    if (selectedNodes.length > 0) {
      this.selectedArticle = selectedNodes[0].data;
      // You can now display this article in a card or modal
      console.log(this.selectedArticle);
    } else {
      alert('Please select an article to view.');
    }
  }
}
