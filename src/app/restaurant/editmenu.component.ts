import { Component, OnInit } from '@angular/core';

import { WelcomeService } from './welcome.service';
import { EditMenuService } from './editmenu.service';
import { EditMenu } from './editmenu';
import { Router,ActivatedRoute } from '@angular/router';
import { AppService } from '../admin/app.service';
@Component({
    templateUrl: "./editmenu.component.html"
})
export class EditMenuComponent implements OnInit {


    menu:EditMenu;
    orders: EditMenu;
    orderId: number;
    constructor(private editService: EditMenuService, private route: ActivatedRoute, private router:Router,public nav:AppService) { }
    ngOnInit() {
        this.menu= new EditMenu();
        this.editService.orderDetailsForEdit().subscribe((data) => {
            this.orders = data;
            console.log(data);
            this.nav.show();
        })
        this.route.paramMap.subscribe((map) => {
             this.orderId = Number(map.get("_id"));
             this.editService.deleteOrder(this.orderId).subscribe(()=> console.log("deleted")
        );
       
        })
    }
    delete(orderId) {
        location.reload(true)
    
    }

    addMenu() {
        alert("Menu updated successfull");
        console.log(this.menu);
      this.editService.addingMenu(this.menu).subscribe((data)=>{
           console.log("success");
        
           if(data!=null){
              location.reload(true)
      }
    })
}
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
    