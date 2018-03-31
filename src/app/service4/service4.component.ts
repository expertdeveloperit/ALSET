import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-service4',
  templateUrl: './service4.component.html',
  styleUrls: ['./service4.component.css']
})
export class Service4Component implements OnInit {

	public para4:any;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.service4Data();
  }
  english(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('en'));
   this.service4Data();
  }
  spanish(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('es'));
   this.service4Data();
  }
  service4Data(){
  	this.service.services().subscribe( data=> {
  			
  			this.para4 = data[4].Description;
  			
  			 			
  		},
  		err =>{
  			console.log(err,"err")
  		},
  		()=> {
  			console.log("done!");
  		})
  }

}
