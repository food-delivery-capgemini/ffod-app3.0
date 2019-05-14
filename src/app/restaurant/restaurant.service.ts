import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
@Injectable()
export class RestaurantService{
     baseUrl="http://localhost:8089";
    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    constructor(private http:HttpClient){

    }
    signUpDetailsOfUser(restaurant:Restaurant):Observable<Restaurant>{
      console.log(restaurant);
        return this.http.post<Restaurant>(this.baseUrl+"/signUp",restaurant,{headers: this.headers});
    }
   
    signInDetailsOfUser(email:string,password:string){
        
          return this.http.get<Restaurant>(this.baseUrl+"/loginuser/"+email+"/"+password);
      }

      signUpDetailsOfRestaurant(restaurant:Restaurant):Observable<Restaurant>{
        console.log(restaurant);
        return this.http.post<Restaurant>(this.baseUrl+"/restro/signup",restaurant,{headers: this.headers})

    }
    signInDetailsOfRestaurant(email:string):Observable<Restaurant> {
        return this.http.get<Restaurant>(this.baseUrl+"/loginuser/"+email);
        
    }
}