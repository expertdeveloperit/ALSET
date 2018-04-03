import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

	public para2:any;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.service2Data();
  }
  english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.service2Data();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.service2Data();
  }
  service2Data(){
  	this.service.services().subscribe( data=> {
  			this.para2 = data[2].Description;
  		},
  		err =>{
  			console.log(err,"err")
  		})
  }

}
