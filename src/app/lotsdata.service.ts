import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotsdataService {

  constructor(public http:HttpClient) {}

  getAllNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

  getAllSportsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

  getAllEntertainmentsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

  getAllHealthsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

  getAllScienceNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }

  getAllBusinessNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ecdf9d0d58464f68b9383211c9bdcf1f`
    return this.http.get(url)
  }
}
