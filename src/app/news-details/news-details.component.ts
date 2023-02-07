import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  constructor(public http:HttpClient, public lotData: LotsdataService) {}

  ngOnInit(){
    this.getAllNews();
  }
  p: number = 1

  newsBlogs:any = [];
  getAllNews(){
    this.lotData.getAllNews().subscribe((res:any)=>{
      console.log(res);
      this.newsBlogs.push(res);
      console.log(this.newsBlogs[0].articles)
    })
  }
}
