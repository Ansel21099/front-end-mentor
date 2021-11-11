import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  timeFrames: string[] = ['daily','weekly','monthly'];
  activeTimeFrame: string = this.timeFrames[0];

  constructor() {}

  ngOnInit(): void {}

  changeTimeFrame(time: string) {
    this.activeTimeFrame = time;
  }
}
