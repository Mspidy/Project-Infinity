import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {S3} from 'aws-sdk/clients/all';

@Injectable({
  providedIn: 'root'
})
export class LotsdataService {


  bucket: any;
  constructor(public http:HttpClient) {
    // this.bucket = new S3({
    //   accessKeyId: environment.awsS3.accessKeyId,
    //   secretAccessKey: environment.awsS3.secretAccessKey,
    //   region: environment.awsS3.region
    // })
  }

  getAllNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }

  getAllSportsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }

  getAllEntertainmentsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }

  getAllHealthsNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }

  getAllScienceNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }

  getAllBusinessNews(): Observable<any>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=816419abdc3f49a6a9ea8cba3356cc66`
    return this.http.get(url)
  }


  //insert stocks data into the database
  addStock(obj:any):Observable<any>{
    let url = `${environment.base_URL}/addStocks`;
    return this.http.post(url,obj)
  }


  //that alluser api---> this is a samsung stocks .
  getStock(): Observable<any>{
    let url = `${environment.base_URL}/alluser`;
    return this.http.get(url)
  }

  addMetaStock(obj:any): Observable<any>{
    let url = `${environment.base_URL}/metaStocks`;
    return this.http.post(url,obj)
  }

  getMetaStocks(): Observable<any> {
    let url = `${environment.base_URL}/getmetaStocks`;
    return this.http.get(url)
  }

  registrationNewUser(obj:any): Observable<any>{
    let url = `${environment.base_URL}/newuser`;
    return this.http.post(url,obj)
  }

  getAllUser(): Observable<any>{
    let url = `${environment.base_URL}/getAllUser`;
    return this.http.get(url);
  }

  newBlogs(obj:any): Observable<any>{
    let url = `${environment.base_URL}/newblog`;
    return this.http.post(url,obj)
  }

  getBlogs(): Observable<any>{
    let url = `${environment.base_URL}/getAllBlogs`;
    return this.http.get(url)
  }

  // uploadFile(files:any, subPath:any, photoName:any){
  //   var promises = [];
  //   promises.push(this.uploadFileToS3(files, subPath, photoName));
  //   return Promise.all(promises);
  // }

  // uploadFileToS3(file:any, subPath: any, photoName: any){
  //   return new Promise((resolve, reject)=>{
  //     let name = file.type.split('/')[1];
  //     let date = new Date().getTime()
  //     const params = {
  //       Bucket: environment.aws3.bucketName,
  //       Key: `${photoName}` + `${date}.` + `${file.type.split('/')[1]}`,
  //       Body: file,
  //       ACL: 'private',
  //       ContentType: file.type,
  //     };
  //     console.log('params', params);
  //   })
  // }
}
