import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  prices: Price[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.fetchPrices().subscribe((prices: Price[]) => {
      this.prices = prices;
    })
  }

}
