import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent{
  uno = "96 - 100";
  uno2 = "91.5 - 95.9";
  uno3 = "87.0 - 91.4";
  uno4 = "82.5 - 86.9";
  dos = "78.0 - 82.4";
  dos2 = "73.5 - 77.9";
  dos3 = "69.0 - 73.4";
  dos4 = "64.5 - 68.9";
  tres = "60.0 - 64.4";
  cinco = "0.0 - 59.9";

  subject = '';
  compute = "Compute Grade";
  name = '';
  prelim = 0;
  midterm = 0;
  final = 0;
  stunum = '';

  getStu(data:any){
    this.stunum = data;
  }

  getName(data:any){
    this.name = data;
  }
  
  getSubject(data1:any){
    this.subject = data1;
  }

  getPrelim(data2:any){
    this.prelim = data2;
  }

  getMidterm(data3:any){
    this.midterm = data3;
  }

  getFinal(data4:any){
    this.final = data4;
  }
  
  outName = '';
  outSubject = '';
  outAverage = 0;
  outPre = 0;
  outMid = 0;
  outFi = 0;
  outStu = '';
  showData($event:any){
    if($event){
      this.outName = this.name;
      this.outStu = this.stunum;
      this.outPre = this.prelim;
      this.outMid = this.midterm;
      this.outFi = this.final;
      this.outSubject = this.subject;
      this.outAverage = (+this.prelim + +this.midterm + +this.final) / 3;
    }
  }


}

  

