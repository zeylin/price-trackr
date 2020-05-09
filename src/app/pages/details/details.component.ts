import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { PriceDetailed } from 'src/app/models/priceDetailed';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = this.activeRoute.snapshot.params['id'];

  price: PriceDetailed;

  constructor(
    private activeRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getPrice();
  }

  /**
   * Get a price by ID.
   */
  getPrice(): void {
    this.api.fetchPrice(this.id)
      .subscribe(price => this.price = price);
  }

}
