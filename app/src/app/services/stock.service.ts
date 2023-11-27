import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'https://api.example.com/stock-data'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getStockData(ticker: string): Observable<any> {
    // You need to replace this with the actual API call to fetch stock data
    // The API should return an array of objects with 'date' and 'price' properties
    return this.http.get(`${this.apiUrl}?ticker=${ticker}`);
  }
}
