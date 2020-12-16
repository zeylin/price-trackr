import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.scss']
})
export class PriceItemComponent implements OnInit {
  @Input() price: Price;

  constructor() { }

  ngOnInit(): void {
  }

}
