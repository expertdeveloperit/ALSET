import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Screen4Component implements OnInit {

	public consultancyData:string;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.getConsultancyData();
  }
  english(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getConsultancyData();
  }
  spanish(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getConsultancyData();
  }
  getConsultancyData() {
  		this.service.consultancy().subscribe( (data: any)=> {
  			console.log(data);
  			this.consultancyData = data.Description;

   		},
  		err =>{
  			console.log(err,"err")
  		},
  		()=> {
  			console.log("done!");
  		})
  	}

}
