import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';


@Component({
    templateUrl:"./restaurantLogin.component.html",
    // selector:"customer-login"
    styleUrls: ["./restaurantLogin.component.css"]


})
export class RestaurantLoginComponent implements OnInit {
        email:string;
        password:string;
    
        restaurant: Restaurant;
        constructor(private  route:Router, private restaurantService: RestaurantService) { }
        
        
        
        ngOnInit() {
        }
    
    //    signInDetailsOfUser() {
    //        // alert("method");
    //         console.log(this.restaurant);
    //         let password = (<HTMLInputElement>document.getElementById("password")).value;
    //         let email = (<HTMLInputElement>document.getElementById("email")).value;
            
    //         this.restaurantService.signInDetailsOfRestaurant(email,password).subscribe((data) => {
    //             alert("Login Successful");
    //             console.log(data);
    //             if (data != null) {
    //                 //alert("done");
                 
    
    //             }
    //         });
    
    onSubmit() {
        alert(this.email);
        alert(this.password);
       this.restaurantService.signInDetailsOfRestaurant(this.email).subscribe((data) => {
           alert(this.restaurant);
           this.restaurant = data;
           alert("sueremail2");
       });
    
       if(this.restaurant!=null){
           alert("suerpass");
          if(this.restaurant.password == this.password){
           this.route.navigate(['/main']);
          }
       }else{
           this.route.navigate(['restaurant/signup']);
       }
    
     
    } 
    }
   

