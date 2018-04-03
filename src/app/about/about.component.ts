import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  public about:string;
  constructor(public service :DataService) { }

  ngOnInit() {
    this.getaboutData();
  }
  english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getaboutData();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getaboutData();
  }

  getaboutData() {
      this.service.about().subscribe( (data: any) => {
        if(data){
          this.about = data.Description;
        }
      },
      err =>{
        console.log(err,"err")
      })
    }

}
