import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeTrackingDashboardComponent } from './time-tracking-dashboard/time-tracking-dashboard.component';
import { ProfileCardComponent } from './time-tracking-dashboard/components/profile-card/profile-card.component';
import { EventCardComponent } from './time-tracking-dashboard/components/event-card/event-card.component';
import { HourPipe } from './time-tracking-dashboard/pipes/hour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackingDashboardComponent,
    ProfileCardComponent,
    EventCardComponent,
    HourPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
