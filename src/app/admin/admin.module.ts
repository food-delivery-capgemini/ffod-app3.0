
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { adminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login.component';

@NgModule({
    declarations: [AdminComponent,AdminLoginComponent],
    imports: [BrowserModule,
        RouterModule.forChild(adminRoutes),
        HttpClientModule],
    providers: [],
    exports: [AdminComponent,
        RouterModule,
    AdminLoginComponent]
})
export class AdminModule {

}