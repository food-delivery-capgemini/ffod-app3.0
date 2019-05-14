import { Component } from '@angular/core';
import { Welcome } from './welcome';
import { WelcomeService } from './welcome.service';
import { EditMenuService } from './editmenu.service';
import { EditMenu } from './editmenu';
@Component({
    templateUrl: "./editmenu.component.html"
})
export class EditMenuComponent {


    orders: EditMenu;
    constructor(private restaurantService:EditMenuService) {}
    ngOnInit() {
        this.restaurantService.orderDetailsForEdit().subscribe((data)=>{
            this.orders=data;
            console.log(data);
        })
    }
//     orders=[{ 
//         "orderNumber"  :  101, 
//         "dish"   :  "Mcveggie", 
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
//     }
// ]

}