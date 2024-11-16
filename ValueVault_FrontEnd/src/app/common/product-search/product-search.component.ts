import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductComponent } from "../product/product.component";
import { NgFor, NgIf } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';
import { SortTypes } from '../../modals/enums/SortTypes.enum';
import { ConditionTypes } from '../../modals/enums/ConditionTypes.enum';
import { DiscountTypes } from '../../modals/enums/DiscountTypes.enum';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [HeaderComponent, ProductComponent, NgFor, LoaderComponent, NgIf, RouterModule, FormsModule],
  providers: [ApiService],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent implements OnInit {
  sliderValue: number = 0;
  pageNumber: number = 1;
  totalProducts: number = 0;

  resetFilters() {
    throw new Error('Method not implemented.');
  }
  applyFilters() {
    throw new Error('Method not implemented.');
  }

  @Input() searchTerm: string = "";
  public productInfo: any[] = [];
  loading: boolean = false;
  isSearchErrorFound: boolean = false;
  isServerErrorFound: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private apiService: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      if (this.searchTerm === "" || this.searchTerm === null) {
        if (sessionStorage.getItem('searched-term') || sessionStorage.getItem('searched-term') !== "") {
          this.searchTerm = sessionStorage.getItem('searched-term') ?? "";
        }
      }
      this.loadSearchResults(this.searchTerm, this.pageNumber, SortTypes.Relevance, ConditionTypes.All, DiscountTypes.AllDiscounts);
    }
  }

  async loadSearchResults(searchTerm: any, pageNumber:number, sort: SortTypes, condition: ConditionTypes, discounts: DiscountTypes) {
    this.loading = true;
    if (searchTerm === "" || searchTerm === null) {
      this.productInfo = [];
      this.loading = false;
      this.isServerErrorFound = false
      this.isSearchErrorFound = true;
      return;
    } else {
      this.isSearchErrorFound = false;
      this.isServerErrorFound = false;
      this.apiService.fetchSearchResults(searchTerm, pageNumber, sort, condition, discounts).subscribe({
        next: (results) => {
          console.log(results);
          this.productInfo = results.data.products;
          this.loading = false;
        },
        error: (error) => {
          console.error("Error fetching data:", error);
          this.isServerErrorFound = true;
          this.loading = false;
        }
      });
    }
  }
}
