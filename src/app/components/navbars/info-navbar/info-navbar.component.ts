import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-navbar',
  templateUrl: './info-navbar.component.html',
  styleUrls: ['./info-navbar.component.scss']
})
export class InfoNavbarComponent implements OnInit {

  constructor() { }


  @Input('user') user: any;

  ngOnInit() {
  }

}
