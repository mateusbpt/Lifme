import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  public cardLength : number = 1;

  public user : any = { name: "Mateus", lastname : "Teixeira" };

  ngOnInit() {
  }

}
