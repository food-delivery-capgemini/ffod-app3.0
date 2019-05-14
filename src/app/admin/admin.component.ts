import { Component } from '@angular/core';


@Component({
    templateUrl:"./admin.component.html"

})
export class AdminComponent {


    userRequests=[{ 
        "userid"  :  101, 
        "orderid"   :  401, 
        "dbid": 43434,
        "orderdetails"      :  "Burger",
        "status": "ORDER RECIVED"
    },
    { 
        "userid"  :  102, 
        "orderid"   :  12313,
        "dbid": 6534, 
        "orderdetails"      :  "Caviar",
        "status": "ORDER DELIVERED" 
    },
    { 
        "userid"  :  103, 
        "orderid"   :  2342341,
        "dbid": 56465, 
        "orderdetails"      : "Dosa",
        "status": "IN TRANSIT"
    }
]

resturant=[{ 
    "resturantName": "Dominos",
    "location": "Andheri(West)",
    "owner": "Robert",
    "contact": 8899929384
},
{ 
    "resturantName": "Bukhara",
    "location": "Bandra(West)",
    "owner": "Jon",
    "contact": 9893579384
},
{ 
    "resturantName": "WOW Momos",
    "location": "Airoli(West)",
    "owner": "Allen",
    "contact": 7899529328
}

]

}