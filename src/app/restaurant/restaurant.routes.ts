import { Routes } from "@angular/router";
import { RestaurantLoginComponent } from './restaurantLogin.component';
import { RestaurantRegistrationComponent } from './restaurantRegistration.component';
import { RestaurantApproveComponent } from './restaurantApprove.component';
import { WelcomeComponent } from 'src/app/restaurant/welcome.component';
import { EditMenuComponent } from '../restaurant/editmenu.component';

export const resturantRoutes: Routes = [
    {path: "editmenu", component: EditMenuComponent},
    {path: "home", component: WelcomeComponent},
    {path:"resturant/login",component: RestaurantLoginComponent},
    {path:"resturant/signup",component: RestaurantRegistrationComponent},
    {path:"resturant/approval",component: RestaurantApproveComponent},
    {path:"resturant-loggedin",component: WelcomeComponent},
    {path:"resturant-signup",component: RestaurantLoginComponent}
];