import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  @Input() title: string;
  @Input() prices: Price[];

  constructor() { }

  ngOnInit(): void {
  }

}
