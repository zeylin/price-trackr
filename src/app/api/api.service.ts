import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';
import { PriceDetailed } from '../models/priceDetailed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = `${environment.apiUrl}/prices`;
  private archiveUrl = `${environment.apiUrl}/archive`;

  constructor(private http: HttpClient) { }

  /**
   * Fetch prices.
   */
  fetchPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.url)
  }

  /**
   * Fetch archive (i.e. deleted prices)
   */
  fetchDeleted(): Observable<Price[]> {
    return this.http.get<Price[]>(`${this.archiveUrl}`)
  }

  /**
   * Fetch a price by ID.
   * @param id ID of the price entry
   */
  fetchPrice(id: number): Observable<PriceDetailed> {
    return this.http.get<PriceDetailed>(`${this.url}/${id}`);
  }

  /**
   * Delete a price by ID
   * @param id ID of the price entry
   */
  deletePrice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  /**
   * Restore a price back from the archive
   * @param id ID of the item
   */
  restorePrice(id: number): Observable<void> {
    return this.http.put<void>(`${this.archiveUrl}/restore/${id}`, {});
  }

  /**
   * Clear the archive by deleting all archived prices.
   */
  clearArchive(): Observable<void> {
    return this.http.delete<void>(`${this.archiveUrl}/all`);
  }

}
