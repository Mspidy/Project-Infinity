import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  { path: 'datamanage', component:DatamanagementComponent},
  { path: 'login', component:SigninComponent},
  { path:'news', component: NewsDetailsComponent},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
