import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey: string = '4749232912f1d64e71f0d95676921de18096b99c';

  constructor(private http: HttpClient) {}

  getSearchApiUrl(searchTerm: string, pageNumber:number): any {
    return `/api/getter/?platform=amazon_search&search=${searchTerm}&country_code=us&page=${pageNumber}&api_key=${this.apiKey}`;
  }

  fetchSearchResults(searchTerm: string, pageNumber:number): Observable<any> {
    const url = this.getSearchApiUrl(searchTerm, pageNumber);
    return this.http.get(url); 
  }
}
