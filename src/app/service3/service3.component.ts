import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css']
})
export class Service3Component implements OnInit {

	public para3:any;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.service3Data();
  }
  english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.service3Data();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.service3Data();
  }
  service3Data(){
  	this.service.services().subscribe( data=> {
  			
  			this.para3 = data[3].Description;
  			
  			 			
  		},
  		err =>{
  			console.log(err,"err")
  		})
  }

}
