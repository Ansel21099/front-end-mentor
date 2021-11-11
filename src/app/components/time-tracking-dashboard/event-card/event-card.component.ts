import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() cardData: any;

  imagesAndColor: any = [
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-work.svg',
      color: 'light-red',
      key: 'Work'
    },
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-play.svg',
      color: 'soft-blue',
      key: 'Play'
    },
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-study.svg',
      color: 'light-red',
      key: 'Study'
    },
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-exercise.svg',
      color: 'lime-green',
      key: 'Exercise'
    },
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-social.svg',
      color: 'violet',
      key: 'Social'
    },
    {
      imageUrl: './../../../../assets/time-tracking-dashboard/images/icon-self-care.svg',
      color: 'soft-orange',
      key: 'Self Care'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardData);

  }

}
