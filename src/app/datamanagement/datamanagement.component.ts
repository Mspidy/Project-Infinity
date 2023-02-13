import { Component } from '@angular/core';
import { LotsdataService } from '../lotsdata.service';
import * as Highcharts from "highcharts";
import * as XLSX from 'xlsx'

type AOA = any[]

@Component({
  selector: 'app-datamanagement',
  templateUrl: './datamanagement.component.html',
  styleUrls: ['./datamanagement.component.css']
})
export class DatamanagementComponent {
  data: AOA = [[,], [,]];
  samsung:boolean=false;
  google:boolean=true;
  apple:boolean=false;
  meta:boolean=false;

  constructor( public dataService : LotsdataService){
    
  }

  //sectorData:any =[]
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  ngOnInit(){
    this.createChartLine();
    this.createChartColumn();
    this.getAllStocks();
    this.getMetaStocks();
  }
  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)]);
    }

    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
          
        }
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [{
        name: 'Amount',
        data,
        color: '#0d174c'
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
    }, 1500);
  }

  private createChartColumn(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart('chart-column' as any, {
      
      chart: {
        type: 'areaspline',
      },
      title: {
        text: 'Column Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [{
        name: 'Amount',
        data,
        color: '#0d174c'
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      }, true, true);
    }, 1500);
  }

  
  // ngAfterViewInit(){
  //   // @ts-ignore
  //   this.enquirygraph = Highcharts.chart('containerss', {
  //     title: {
  //       text: "Enquiry & Registeration Count",
  //       align: "left",
  //     },

  //     yAxis: {
  //       title: {
  //         text: "Number of Employees",
  //       },
  //     },

  //     xAxis: {
  //       categories: [
  //         "1st",
  //         "2nd",
  //         "3rd",
  //         "4th",
  //         "5th",
  //         "6th",
  //         "7th",
  //         "8th",
  //         "9th",
  //         "10th",
  //         "11th",
  //         "12th",
  //         "LKG",
  //         "Nursery",
  //         "Playschool",
  //         "Prep",
  //         "UKG",
  //       ],
  //       crosshair: true,
  //     },

  //     legend: {
  //       layout: "vertical",
  //       align: "right",
  //       verticalAlign: "middle",
  //     },

  //     plotOptions: {
  //       series: {
  //         label: {
  //           connectorAllowed: false,
  //         },
  //         //pointStart: 2010,
  //       },
  //     },

  //     series: [
  //       {
  //         name: "Enquriy Count",
  //         data: [
  //           5,5,5,5,5,5,4,17,8,5,5,5,5,6,6,
  //         ],
  //       },
  //       {
  //         name: "Registeration Count",
  //         data: [
  //           4,5,5,4,4,3,4,4,3,7,4,4,5,1,1
  //         ],
  //       },
  //     ],

  //     responsive: {
  //       rules: [
  //         {
  //           condition: {
  //             maxWidth: 500,
  //           },
  //           chartOptions: {
  //             legend: {
  //               layout: "horizontal",
  //               align: "center",
  //               verticalAlign: "bottom",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   });
  // }

  filterStocks:any = [];
  onFileChange(evt:any){
    console.log(evt)
    const target: DataTransfer = <DataTransfer>evt.target;
    if(target.files.length !==1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e:any)=>{
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, {header:1});

      this.data.forEach((x:any, i:any)=>{
        let stocks:any = {};
        stocks['date'] = x[0];
        stocks['open'] = x[1];
        stocks['high'] = x[2];
        stocks['low'] = x[3];
        stocks['close'] = x[4];
        stocks['adjclose'] = x[5];
        stocks['volume'] = x[6];

        this.filterStocks.push(stocks);

      });
      console.log(this.filterStocks[0])
      for(let i in this.filterStocks){
        this.dataService.addMetaStock(this.filterStocks[i]).subscribe((res:any)=>{
          console.log(res)
        })
      }
    }
    reader.readAsBinaryString(target.files[0])
    console.log(target.files[0])
  }

  samsungStock:any = [];
  getAllStocks(){
    this.dataService.getStock().subscribe((res:any)=>{
      console.log(res);
      this.samsungStock.push(res);
      console.log(this.samsungStock[0])
    })
  }

  allSamsungStock(){
    this.samsung = true;
    this.google = false;
    this.meta = false;
    this.apple = false
  }

  allGoogleStock(){
    this.google = true;
    this.apple = false;
    this.meta = false;
    this.samsung = false;
  }

  allAppleStock(){
    this.apple = true;
    this.samsung = false;
    this.google = false;
    this.meta = false;
  }

  allMetaStock(){
    this.meta = true;
    this.samsung = false;
    this.google = false;
    this.apple = false;
  }

  metaStocks:any = [];
  getMetaStocks(){
    this.dataService.getMetaStocks().subscribe((res:any)=>{
      console.log(res);
      this.metaStocks.push(res);
      console.log(this.metaStocks[0]);
    })
  }

}
