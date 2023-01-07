import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';



@Component({
  selector: 'app-datamanagement',
  templateUrl: './datamanagement.component.html',
  styleUrls: ['./datamanagement.component.css']
})
export class DatamanagementComponent {

  constructor( public dataService : LotsdataService){
    
  }

  sectorData:any =[]

  ngOnInit(){
    this.dataService.getJSON().subscribe(data=>{
      console.log(data)
     
    });
    console.log("All Data=>",this.sectorData);
  }

  currentDate = new Date();

  // sector:any=''

  // filterName(){
  //   this.sectorData = this.sectorData.filter((res: { sector: string; })=>{
  //     return res.sector.toLocaleLowerCase().match(this.sector.toLocaleLowerCase())
  //   });
  //   console.log("Hello")
  // }

  deleteData(data:any){
    console.log("All Data=>",this.sectorData);
  }

}
