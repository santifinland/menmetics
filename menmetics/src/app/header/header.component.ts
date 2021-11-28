import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public tabs: any[] = [
    {
      label: "Flights",
      icon: "airplanemode_active"
    },
    {
      label: "Hotel",
      icon: "hotel"
    },
    {
      label: "Favorites",
      icon: "favorite"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
