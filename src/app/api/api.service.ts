import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';

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

  fetchPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.listPricesUrl)
  }

  fetchDeleted(): Observable<Price[]> {
    return this.http.get<Price[]>(this.listDeletedUrl)
  }

}
