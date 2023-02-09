import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { EntertainmentsComponent } from './entertainments/entertainments.component';
import { HealthComponent } from './health/health.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ScienceComponent } from './science/science.component';
import { SigninComponent } from './signin/signin.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';

const routes: Routes = [
  { path: 'datamanage', component:DatamanagementComponent},
  { path: 'login', component:SigninComponent},
  { path:'news', component: NewsDetailsComponent},
  { path:'sports', component: SportsNewsComponent},
  { path: 'entertainments', component: EntertainmentsComponent},
  { path: 'healths', component: HealthComponent},
  { path: 'science', component: ScienceComponent},
  { path: 'business', component: BusinessComponent},
  // { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
