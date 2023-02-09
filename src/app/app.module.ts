import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxGaugeModule } from 'ngx-gauge';
import { HeaderComponent } from './header/header.component';
import { FootarComponent } from './footar/footar.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { SigninComponent } from './signin/signin.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailsComponent } from './news-details/news-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { EntertainmentsComponent } from './entertainments/entertainments.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootarComponent,
    DatamanagementComponent,
    SigninComponent,
    NewsDetailsComponent,
    SportsNewsComponent,
    EntertainmentsComponent,
    HealthComponent,
    ScienceComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HighchartsChartModule,
    NgxGaugeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
    }),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
