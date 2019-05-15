import { Component, OnInit} from '@angular/core';
import { WelcomeService } from './welcome.service';
import { Welcome } from './welcome';
import { AppService } from '../admin/app.service';

@Component({
    templateUrl: "./welcome.component.html",
    selector: "WelcomeComponent"
})
export class WelcomeComponent implements OnInit{
  
    orders: Welcome;
    constructor(private restaurantService:WelcomeService,public nav:AppService) {}
    ngOnInit() {
        this.restaurantService.orderDetails().subscribe((data)=>{
            this.orders=data;
            console.log(data);
            this.nav.show();
        })
    }

    
   
//     orders=[{ 
//         "orderNumber"  :  101, 
//         "dish"   :  "Burger", 
//         "price"      :  200,
//         "quantity" : 2 
//     },
//     { 
//         "orderNumber"  :  102, 
//         "dish"   :  "Pizza", 
//         "price"      :  600,
//         "quantity" : 7 
//     },
//     { 
//         "orderNumber"  :  103, 
//         "dish"   :  "Ice cream", 
//         "price"      :  60,
//         "quantity" : 5 
//     },
//     { 
//         "orderNumber"  :  104, 
//         "dish"   :  "Momos", 
//         "price"      :  60,
//         "quantity" : 5 
//     }
// ]



}
