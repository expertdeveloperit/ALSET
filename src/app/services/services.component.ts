import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
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
