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
    
  }

}
