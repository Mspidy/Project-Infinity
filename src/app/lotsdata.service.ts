import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotsdataService {

  constructor(public http:HttpClient) { 
    this.getJSON().subscribe(data=>{
      console.log(data)
    })
   }


   getJSON(): Observable<any>{
    return this.http.get("./assets/jsondata.json");
   }
}
