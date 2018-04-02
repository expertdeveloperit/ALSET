import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConsultancyComponent implements OnInit {
  public consultancyData:any;
  constructor(public service :DataService) { }

  ngOnInit() {
    this.getConsultancyData();
  }
  english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getConsultancyData();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getConsultancyData();
  }
  getConsultancyData() {
      this.service.consultancy().subscribe( (data: any)=> {
        this.consultancyData = data.Description;

       },
      err =>{
        console.log(err,"err")
      })
    }

}
