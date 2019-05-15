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
    deleteOrder(_id: number):Observable<void> {
      console.log(this.baseUrl+"/editmenu/"+_id);
      return this.http.delete<void>(this.baseUrl+"/editmenu/"+_id);
    }
    addingMenu(menu: EditMenu): Observable<EditMenu> {
      console.log(menu);
      return this.http.post<EditMenu>(this.baseUrl + "/addmenu", menu, { headers: this.headers });
    }

 
}