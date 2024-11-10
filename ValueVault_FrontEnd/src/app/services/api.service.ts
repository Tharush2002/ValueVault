import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey: string = 'a5d776dd9fa71c3ee90dd56450725441266201ed';

  constructor(private http: HttpClient) {}

  getSearchApiUrl(searchTerm: string, pageNumber:number): any {
    return `/api/getter/?platform=amazon_search&search=${searchTerm}&country_code=us&page=${pageNumber}&api_key=${this.apiKey}`;
  }

  fetchSearchResults(searchTerm: string, pageNumber:number): Observable<any> {
    const url = this.getSearchApiUrl(searchTerm, pageNumber);
    return this.http.get(url); 
  }
}