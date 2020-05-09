import { Component, OnInit } from '@angular/core';

interface Link {
  route: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Link[] = [
    {
      route: 'home',
      title: 'Home'
    },
    {
      route: 'add',
      title: 'Add'
    },
    {
      route: 'dynamics',
      title: 'Dynamics'
    },
    {
      route: 'archive',
      title: 'Archive'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
