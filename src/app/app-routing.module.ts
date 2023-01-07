import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  { path: 'datamanage', component:DatamanagementComponent},
  { path: 'login', component:SigninComponent},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
