import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Screen2Component implements OnInit {

  public about :string;

  constructor(public service :DataService) { }

  ngOnInit() {
  	this.getaboutData();

  }
  english(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getaboutData();
  }
  spanish(){
    console.log("English");
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getaboutData();
  }

  getaboutData() {
  		this.service.about().subscribe( (data: any) => {
        if(data){
    			console.log(data);
          this.about = data.Description;
          console.log(this.about,"about");
        }
  		},
  		err =>{
  			console.log(err,"err")
  		},
  		()=> {
  			console.log("done!");
  		})
  	}

}