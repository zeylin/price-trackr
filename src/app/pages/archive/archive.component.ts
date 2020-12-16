import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  prices: Price[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.fetchDeleted().subscribe((prices: Price[]) => {
      this.prices = prices;
    })
  }

  restorePrice(index: number): void {
    const price = this.prices[index];

    this.api.restorePrice(price.id)
      .subscribe(() => {
        this.prices = this.prices.filter((_, i) => i !== index);
      });
  }

}
