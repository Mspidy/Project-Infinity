import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotsdataService {

  constructor(public http:HttpClient) {}

  getAllNews(): Observable<any>{
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-07&sortBy=publishedAt&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

}
