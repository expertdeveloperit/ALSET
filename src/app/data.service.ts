import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token'
  })
};

@Injectable()
export class DataService {
 public language :string;

  constructor(public http:HttpClient) { }

  about(){
    this.language = JSON.parse(localStorage.getItem('lang'));
    if(this.language == "en"){
         return this.http.get('https://alsetmx-fx.azurewebsites.net/api/About?code=aSHUQIf6aIcYisxgaGvlRNY1bdc5kfRgBd/ljaDXTnIfcBaXJAvDVA==&lang=en')
     }
     else{
       return this.http.get('https://alsetmx-fx.azurewebsites.net/api/About?code=aSHUQIf6aIcYisxgaGvlRNY1bdc5kfRgBd/ljaDXTnIfcBaXJAvDVA==&lang=es')
     }
  }

  services(){
    this.language = JSON.parse(localStorage.getItem('lang'));
    if(this.language == "en"){
  	  return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Services?code=ATlbamDt0LHrHxN4skLPhOJmja1uuIgO32L8//XuWdHbJ2wgydTcLg==&lang=en');
    }
    else{
      return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Services?code=ATlbamDt0LHrHxN4skLPhOJmja1uuIgO32L8//XuWdHbJ2wgydTcLg==&lang=es')
    }
  }

  consultancy(){
    this.language = JSON.parse(localStorage.getItem('lang'));
    if(this.language == "en"){
      return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Consultancy?code=bb5mzyOUgjsd4BHeKtEEMmU7zojQGiTleMiQdPMoKRdJmUH0CzBzAg==&lang=en');
    }
    else{
  	  return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Consultancy?code=bb5mzyOUgjsd4BHeKtEEMmU7zojQGiTleMiQdPMoKRdJmUH0CzBzAg==&lang=es');
    }
  }

  contact(){
    this.language = JSON.parse(localStorage.getItem('lang'));
    if(this.language == "en"){
  	  return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Contact?code=1pQX2EDlbJ/UZ9FmCgFVodABaNnS1nWQUtZZrBg5MMaXQs7edj30pw==&lang=en');
    }
    else{
      return this.http.get('https://alsetmx-fx.azurewebsites.net/api/Contact?code=1pQX2EDlbJ/UZ9FmCgFVodABaNnS1nWQUtZZrBg5MMaXQs7edj30pw==&lang=es')
    }
  }

}
