import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
     $('#sidebarCollapse').on('click', function () {
         $('#sidebar').toggleClass('active');
         $("#content").toggleClass('count');
         $(".alter").toggleClass('count');
         $(".wrapper").toggleClass('menu-wrapper');
         $(".header-img").toggleClass('hidden');
     });


    $(".main-navigation a").click(function(){
      if($(this).hasClass("active")){
        
        $("#sidebarCollapse").trigger('click');
      }
    });
  }

}
