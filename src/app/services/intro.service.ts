import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';  
 
  
@Injectable()  
export class InfoService {  
  
  constructor(private http: Http) { }  
  
  getUserinfo(){       
    return this.http.get('http://localhost:8080/api/userinfo/')  
            .pipe(map((response: Response) =>response.json()))               
  } 
  getProinfo(){       
    return this.http.get('http://localhost:8080/api/proinfo/')  
            .pipe(map((response: Response) =>response.json()))               
  } 
  /* 
  getAbouts(){       
    return this.http.get('http://localhost:8080/api/GetAbouts/')  
            .pipe(map((response: Response) =>response.json()))               
  }  
  getProjects(){       
    return this.http.get('http://localhost:8080/api/GetProjects/')  
            .pipe(map((response: Response) =>response.json()))               
  }  
  getExperiences(){       
    return this.http.get('http://localhost:8080/api/GetExperiences/')  
            .pipe(map((response: Response) =>response.json()))               
  }  
  getPortfolios(){       
    return this.http.get('http://localhost:8080/api/GetPortfolios/')  
            .pipe(map((response: Response) =>response.json()))               
  }  
  deleteUser(id){   
    return this.http.post('http://localhost:8080/api/DeleteUser/',{'id': id})  
    .pipe(map((response: Response) =>response.json()))            
  }  
  */
}