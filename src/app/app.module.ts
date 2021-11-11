import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeTrackingDashboardComponent } from './components/time-tracking-dashboard/time-tracking-dashboard.component';
import { ProfileCardComponent } from './components/time-tracking-dashboard/profile-card/profile-card.component';
import { EventCardComponent } from './components/time-tracking-dashboard/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackingDashboardComponent,
    ProfileCardComponent,
    EventCardComponent
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
