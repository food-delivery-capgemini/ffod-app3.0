import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { EditMenu } from './editmenu';

@Injectable()
export class EditMenuService {
  baseUrl="http://localhost:8012";
    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    constructor(private http:HttpClient){

    }
  

      orderDetailsForEdit():Observable<EditMenu>{
        
        return this.http.get<EditMenu>(this.baseUrl+"/editmenu");
        
    }

 
}