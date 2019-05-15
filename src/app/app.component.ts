import { Component } from '@angular/core';
import { WelcomeService } from '../app/restaurant/welcome.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './restaurant/user-authenticate.service';
import { AppService } from './admin/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-delivery-app';

  constructor(private router: Router,

    private loginservice: AuthenticationService,
   
    private userService : WelcomeService,
    public nav: AppService ) { }

}