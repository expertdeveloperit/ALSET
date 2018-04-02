import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service1Component } from './service1/service1.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [
 {
   path: '', 
   component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
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
    component:ServicesComponent
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
    component:ConsultancyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
 
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    Service2Component,
    Service3Component,
    Service4Component,
    Service1Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ConsultancyComponent,
    ServicesComponent
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
