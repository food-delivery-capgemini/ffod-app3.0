import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant";
import { RestaurantService } from "./restaurant.service";
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Routes, Router } from '@angular/router';
@Component({
    templateUrl:"./restaurantRegistration.component.html",
   

})
export class RestaurantRegistrationComponent implements OnInit {

    restroForm: FormGroup;
    constructor(private fb: FormBuilder,private service: RestaurantService,private router:Router) { }


    restaurant:Restaurant;

    ngOnInit() {


        this.restroForm = this.fb.group({

            restaurantname: ['', Validators.required], 
            email: ['', Validators.required],
            password: ['', Validators.required],
            contact:  ['', Validators.required],
            city:  ['', Validators.required],
            breakfast:  ['', Validators.required],
            lunch:  ['', Validators.required],
            dinner:  ['', Validators.required],
            tiffin:  ['', Validators.required],
            

        });
    }

    onSubmit() {
        alert("hello");
        this.restaurant = new Restaurant();
        Object.assign(this.restaurant,this.restroForm.value);
        this.service.signUpDetailsOfRestaurant(this.restaurant).subscribe((data) => {
            console.log("success");
            console.log(this.restaurant);
            if(data != null){
                alert("Registration is succesful.");
                this.router.navigate([""]);
            }
        });
    
    }

    get restaurantname() { return this.restroForm.controls.restaurantname; }
    get email() { return this.restroForm.controls.email; }
    get password() { return this.restroForm.controls.password; }
    get contact() { return this.restroForm.controls.contact; }
    get city() { return this.restroForm.controls.city; }
    get breakfast() { return this.restroForm.controls.breakfast; }
    get lunch() { return this.restroForm.controls.lunch; }
    get dinner() { return this.restroForm.controls.dinner; }
    get tiffin() { return this.restroForm.controls.tiffin; }




    //     restaurant: Restaurant;
//     constructor(private restaurantService: RestaurantService){}
//     ngOnInit() {
//         this.restaurant = new Restaurant({
//             phone: ['', Validators.required]
//         });
//     }
    



// signUpDetailsOfRestaurant() {
//     alert("Registration Successful");
//     console.log(this.restaurant);
//     this.restaurantService.signUpDetailsOfRestaurant(this.restaurant).subscribe((data)=>{
//         console.log("success");
//         console.log(data);
//         if(data!=null){
//             alert("Done");
//         }
//     });
// }
}