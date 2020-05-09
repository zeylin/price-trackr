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

}
