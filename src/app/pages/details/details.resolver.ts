import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { PriceDetailed } from 'src/app/models/priceDetailed';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<PriceDetailed> {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PriceDetailed> {
    return this.api.fetchPrice(route.params.id);
  }
}
