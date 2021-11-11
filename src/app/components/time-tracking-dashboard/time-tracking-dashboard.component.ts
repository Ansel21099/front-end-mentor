import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetJsonDataService } from 'src/app/service/get-json-data.service';

@Component({
  selector: 'time-tracking-dashboard',
  templateUrl: './time-tracking-dashboard.component.html',
  styleUrls: ['./time-tracking-dashboard.component.scss']
})
export class TimeTrackingDashboardComponent implements OnInit {

  URL: string = './assets/time-tracking-dashboard/mock-data/data.json'
  jsonResponse: any

  constructor(private getJsonDataService:GetJsonDataService) { }

  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData(){
    this.getJsonDataService.getJSON(this.URL).subscribe(data => {
      this.jsonResponse = data;
  });
  }
}
