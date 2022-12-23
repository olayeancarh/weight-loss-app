import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityComponent } from './components/activity/activity.component';
import { CardComponent } from './components/card/card.component';
import { CardRowComponent } from './components/card-row/card-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    CardComponent,
    CardRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
