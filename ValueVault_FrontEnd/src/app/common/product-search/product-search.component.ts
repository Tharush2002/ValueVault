import { Component, Input, SimpleChanges } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductComponent } from "../product/product.component";
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from "../loader/loader.component";
// import { MatDialog } from '@angular/material/dialog';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [HeaderComponent, ProductComponent, NgFor, HttpClientModule, LoaderComponent, NgIf],
  providers: [ApiService],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  @Input() searchTerm: string = "";
  public productInfo: any[] = [];
  loading: boolean = false;

  constructor(private apiService: ApiService) { } 


  ngOnChanges(changes: SimpleChanges): void {    
    if(this.searchTerm){
      if (changes['searchTerm'] && changes['searchTerm'].currentValue !== changes['searchTerm'].previousValue) {
        this.loadSearchResults(this.searchTerm);
      }
    }
  }

  ngOnInit(): void {
    const storedSearchTerm = sessionStorage.getItem('searched-term');
    if (!storedSearchTerm) {
      this.searchTerm = "";
      sessionStorage.setItem('searched-term', "")
    } else {
      this.searchTerm = storedSearchTerm || "";
    }
    this.loadSearchResults(this.searchTerm);
  }

  async loadSearchResults(searchTerm: any) {
    this.loading = true;
    if (searchTerm === "" || searchTerm === null) {
      if (!sessionStorage.getItem('searched-term') || sessionStorage.getItem('searched-term') === "") {
        sessionStorage.setItem('searched-term', "")
        this.loading = false;
        return
      }
      searchTerm = sessionStorage.getItem('searched-term');
    }
    this.apiService.fetchSearchResults(searchTerm, 1).subscribe({
      next: (data) => {
        console.log(data);
        this.productInfo = data.results;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error fetching data:", error);
        this.loading = false;
      }
    });

  }

  // openProductModal(product: any): void {
  //   console.log(product);
  //   this.dialog.open(ProductViewComponent, {      
  //     data: product // Pass product data to the modal if needed
  //   });
  // }
}
