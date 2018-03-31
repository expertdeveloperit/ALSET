import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Screen5Component implements OnInit {
	public contact:string;
	public phone:any;
	public address:any;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.getContactData();
  }
  english(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getContactData();
  }
  spanish(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getContactData();
  }
  getContactData() {
  		this.service.contact().subscribe( (data: any) => {
  			console.log(data,"data");
  			this.contact = data.Description;
  			this.phone = data.PhoneNumber;
  			this.address = data.Address;
   		},
  		err =>{
  			console.log(err,"err")
  		},
  		()=> {
  			console.log("done!");
  		})
  	}

}
