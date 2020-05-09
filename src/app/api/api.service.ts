import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';
import { PriceDetailed } from '../models/priceDetailed';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private listPricesUrl = 'http://localhost:8080/prices';
  private listDeletedUrl = 'http://localhost:8080/prices/deleted';

  constructor(private http: HttpClient) { }

  fetchMockPrices(): Observable<Price[]> {
    return of([
      {
        id: 1,
        itemName: 'milk',
        amount: 200,
        locationName: 'Grocery store',
        date: '2020-05-08'
      },
      {
        id: 2,
        itemName: 'honey',
        amount: 400,
        locationName: 'Supermarket',
        date: '2020-05-06'
      },
      {
        id: 3,
        itemName: 'almonds',
        amount: 470,
        locationName: 'Farmers market',
        date: '2020-05-04'
      }
    ])
  }

  /**
   * Fetch prices.
   */
  fetchPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.listPricesUrl)
  }

  /**
   * Fetch deleted (archived) prices.
   */
  fetchDeleted(): Observable<Price[]> {
    return this.http.get<Price[]>(this.listDeletedUrl)
  }

  /**
   * Fetch a price by ID.
   * @param id ID of the price entry
   */
  fetchPrice(id: number): Observable<PriceDetailed> {
    const url = `${this.listPricesUrl}/${id}`;
    return this.http.get<PriceDetailed>(url)
    .pipe(
      catchError(this.handleError<PriceDetailed>())
    )
    ;
  }

  /**
   * Handle an error. Let the app continue.
   * @param result - optional value to return as the observable result
   * 
   * Reference: https://angular.io/tutorial/toh-pt6
   * The MIT License
   * Copyright (c) 2010-2020 Google LLC. http://angular.io/license
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
