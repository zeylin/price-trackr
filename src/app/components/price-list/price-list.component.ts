import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  @Input() title: string;
  @Input() prices: Price[];
  @Input() actions: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(_, price: Price) {
    return price?.id;
  }

}