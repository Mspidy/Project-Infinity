import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(public http:HttpClient, public lotData: LotsdataService) {}

  ngOnInit(){
    this.getAllNews();
  }

  p: number = 1

  newsBlogs:any = [];
  getAllNews(){
    this.lotData.getAllHealthsNews().subscribe((res:any)=>{
      console.log(res);
      this.newsBlogs.push(res);
      console.log(this.newsBlogs[0].articles)
    })
  }
}
