

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {InfoService} from './services/intro.service'; 

import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { UserInfo } from './models/intro.model';
import { ProInfo } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})
export class AppComponent implements OnInit {

  UserInfos: UserInfo[] = [];
  ProInfos: ProInfo[] = [];
  constructor(private introService: InfoService) { 
    
  }  

  ngOnInit() {    
    this.getdata_intro();
    this.getdata_product();

  }
  getdata_intro() {
      this.introService.getUserinfo().subscribe(
      data => this.UserInfos = data,
      error => console.log(error)
    );
  }
  
  getdata_product() {
    this.introService.getProinfo().subscribe(
    data => this.ProInfos = data,
    error => console.log(error)
  );
  }
}