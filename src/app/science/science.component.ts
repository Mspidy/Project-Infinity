import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  constructor(public http:HttpClient, public lotData: LotsdataService) {}

  ngOnInit(){
    this.getAllNews();
  }

  p: number = 1

  newsBlogs:any = [];
  getAllNews(){
    this.lotData.getAllScienceNews().subscribe((res:any)=>{
      console.log(res);
      this.newsBlogs.push(res);
      console.log(this.newsBlogs[0].articles)
    })
  }
}
