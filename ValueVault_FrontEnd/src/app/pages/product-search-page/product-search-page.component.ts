import { ProductSearchComponent } from "../../common/product-search/product-search.component";
import { HeaderComponent } from "../../common/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-search-page',
  standalone: true,
  imports: [HeaderComponent, ProductSearchComponent, HttpClientModule],
  templateUrl: './product-search-page.component.html',
  styleUrl: './product-search-page.component.css'
})
export class ProductSearchPageComponent {
  searchTerm: string = '';

  onSearchTermReceived(searchTerm: string): void {
    console.log(searchTerm);
    
    this.searchTerm = searchTerm;
    console.log('Received search term in ProductSearchPageComponent:', this.searchTerm);
  }
}
