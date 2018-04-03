import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {
  public contact:string;
  public phone:any;
  public address:any;

  constructor(public service :DataService) { }

  ngOnInit() {
    this.getContactData();
  }
    english(){
   localStorage.setItem('lang',JSON.stringify('en'));
   this.getContactData();
  }
  spanish(){
   localStorage.setItem('lang',JSON.stringify('es'));
   this.getContactData();
  }
  getContactData() {
      this.service.contact().subscribe( (data: any) => {
        this.contact = data.Description;
        this.phone = data.PhoneNumber;
        this.address = data.Address;
       },
      err =>{
        console.log(err,"err")
      })
    }

}
