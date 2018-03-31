import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {
	public para:any;
	

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.getServiceData();
  }
  english(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getServiceData();
  }
  spanish(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getServiceData();
  }

  getServiceData() {
  		this.service.services().subscribe( data=> {
  			console.log(data);
  			this.para = data[0].Description;
  			
  			 			
  		},
  		err =>{
  			console.log(err,"err")
  		},
  		()=> {
  			console.log("done!");
  		})
  	}

}
