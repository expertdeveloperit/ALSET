import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service1Component } from './service1/service1.component';



const routes: Routes = [
 {
   path: '', 
   component: Screen1Component
  },
  {
    path:'about',
    component: Screen2Component
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'side',
    component:SidebarComponent
  },
  {
    path:'services',
    component:Screen3Component
  },
  {
    path:'service1',
    component:Service1Component
  },
  {
    path:'service2',
    component:Service2Component
  },
  {
    path:'service3',
    component:Service3Component
  },
  {
    path:'service4',
    component:Service4Component
  },
  {
    path:'consultancy',
    component:Screen4Component
  },
  {
    path:'contact',
    component:Screen5Component
  }
 
];

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    SidebarComponent,
    HeaderComponent,
    Screen4Component,
    Screen5Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
