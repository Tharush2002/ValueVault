import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortTypes } from '../../modals/enums/SortTypes.enum';
import { ConditionTypes } from '../../modals/enums/ConditionTypes.enum';
import { DiscountTypes } from '../../modals/enums/DiscountTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiKey: string = '';

  // constructor(private http: HttpClient) {}

  // getSearchApiUrl(searchTerm: string, pageNumber:number): any {
  //   return `/api/getter/?platform=amazon_search&search=${searchTerm}&country_code=us&page=${pageNumber}&api_key=${this.apiKey}`;
  // }

  // fetchSearchResults(searchTerm: string, pageNumber:number): Observable<any> {
  //   const url = this.getSearchApiUrl(searchTerm, pageNumber);
  //   return this.http.get(url); 
  private baseUrl = 'https://real-time-amazon-data.p.rapidapi.com/search';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '6b54e582b9msh5565cebabae88c0p1e1b40jsn719ca9e3a43a',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
  });

  constructor(private http: HttpClient) { }

  fetchSearchResults(query: string, page: number, sort: SortTypes, condition: ConditionTypes, discounts: DiscountTypes): Observable<any> {
    const url = `${this.baseUrl}?query=${query}&page=${page}&country=US&sort_by=${sort}&product_condition=${condition}&is_prime=false&deals_and_discounts=${discounts}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}
