import { ProductSearchComponent } from "../../common/product-search/product-search.component";
import { HeaderComponent } from "../../common/header/header.component";
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-search-page',
  standalone: true,
  imports: [HeaderComponent, ProductSearchComponent],
  templateUrl: './product-search-page.component.html',
  styleUrl: './product-search-page.component.css'
})
export class ProductSearchPageComponent {
  searchTerm: string = '';

  onSearchTermReceived(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }
}
