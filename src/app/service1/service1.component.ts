import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

	public para1:any;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.service1Data();
  }
  english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.service1Data();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.service1Data();
  }
  service1Data(){
  	this.service.services().subscribe( data=> {
  			this.para1 = data[1].Description;
  		},
  		err =>{
  			console.log(err,"err")
  		})
  }

}
