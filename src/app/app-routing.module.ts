import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { BusinessComponent } from './business/business.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { EntertainmentsComponent } from './entertainments/entertainments.component';
import { HealthComponent } from './health/health.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ScienceComponent } from './science/science.component';
import { SigninComponent } from './signin/signin.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';

const routes: Routes = [
  {path:'home', component:  HomeBlogComponent},
  { path: 'datamanage', component:DatamanagementComponent},
  { path: 'login', component:SigninComponent},
  { path:'news', component: NewsDetailsComponent},
  { path:'sports', component: SportsNewsComponent},
  { path: 'entertainments', component: EntertainmentsComponent},
  { path: 'healths', component: HealthComponent},
  { path: 'science', component: ScienceComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'new-blog', component: AddBlogsComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
