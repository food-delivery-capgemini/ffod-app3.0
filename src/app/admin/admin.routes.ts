
import { Routes } from "@angular/router";
import { AdminLoginComponent } from './admin-login.component';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
    {path:"admin",component: AdminLoginComponent},
    {path:"admin/adminloggedin",component: AdminComponent}

];