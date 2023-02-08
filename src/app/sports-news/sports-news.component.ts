import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent {
  constructor(public http:HttpClient, public lotData: LotsdataService) {}

  ngOnInit(){
    this.getAllNews();
  }

  p: number = 1

  newsBlogs:any = [];
  getAllNews(){
    this.lotData.getAllSportsNews().subscribe((res:any)=>{
      console.log(res);
      this.newsBlogs.push(res);
      console.log(this.newsBlogs[0].articles)
    })
  }
}
