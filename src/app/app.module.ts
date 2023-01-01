import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FootarComponent } from './footar/footar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FootarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HighchartsChartModule,
    NgxGaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
