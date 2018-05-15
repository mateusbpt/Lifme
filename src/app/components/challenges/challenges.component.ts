import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  public active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public ativar() {
    this.active = true;
  }

}
