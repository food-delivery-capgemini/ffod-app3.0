import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Welcome } from './welcome';
import { Observable } from 'rxjs';

@Injectable()
export class WelcomeService {
  baseUrl="http://localhost:8011";
    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    constructor(private http:HttpClient){

    }
  
   
    orderDetails():Observable<Welcome>{
        
          return this.http.get<Welcome>(this.baseUrl+"/order");
          
      }

  
 
}