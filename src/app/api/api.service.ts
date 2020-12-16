import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';
import { PriceDetailed } from '../models/priceDetailed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = `${environment.apiUrl}/prices`;

  constructor(private http: HttpClient) { }

  /**
   * Fetch prices.
   */
  fetchPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.url)
  }

  /**
   * Fetch deleted (archived) prices.
   */
  fetchDeleted(): Observable<Price[]> {
    return this.http.get<Price[]>(`${this.url}/deleted`)
  }

  /**
   * Fetch a price by ID.
   * @param id ID of the price entry
   */
  fetchPrice(id: number): Observable<PriceDetailed> {
    return this.http.get<PriceDetailed>(`${this.url}/${id}`);
  }

}
