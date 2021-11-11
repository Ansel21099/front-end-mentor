import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  activeTimeFrame: string = 'daily';
  constructor() {}

  ngOnInit(): void {}

  changeTimeFrame(time: string) {
    this.activeTimeFrame = time;
  }
}
