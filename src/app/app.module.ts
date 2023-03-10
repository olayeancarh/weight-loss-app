import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityComponent } from './components/activity/activity.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { GoalComponent } from './components/goal/goal.component';
import { HomeBarChartComponent } from './components/home-bar-chart/home-bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { TrendingComponent } from './components/trending/trending.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryBarChartComponent } from './components/history-bar-chart/history-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    CardRowComponent,
    GoalComponent,
    HomeBarChartComponent,
    TrendingComponent,
    NavigationComponent,
    HomeComponent,
    MeasurementComponent,
    HistoryComponent,
    HistoryBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
