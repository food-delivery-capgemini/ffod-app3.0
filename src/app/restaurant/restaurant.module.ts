import { NgModule } from '@angular/core';
import { RestaurantLoginComponent } from './restaurantLogin.component';
import { RestaurantRegistrationComponent } from './restaurantRegistration.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { resturantRoutes } from './restaurant.routes';
import { RestaurantApproveComponent } from './restaurantApprove.component';
import { RestaurantService } from './restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { WelcomeComponent } from '../restaurant/welcome.component';
import { EditMenuComponent } from '../restaurant/editmenu.component';
import { WelcomeService } from './welcome.service';
import { EditMenuService } from './editmenu.service';

@NgModule({
    declarations: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent,
        WelcomeComponent,
        EditMenuComponent
    ],

    imports: [BrowserModule,
        RouterModule.forChild(resturantRoutes),
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],

    exports: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent,
        WelcomeComponent,
        RouterModule,
        EditMenuComponent
    ],

    providers: [RestaurantService,
    WelcomeService, EditMenuService]
})
export class RestaurantModule {

}