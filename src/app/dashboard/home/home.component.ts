import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  items : MenuItem[] = [];

  constructor(
    private authService : AuthService,
    private route : Router
  ) { }

  ngOnInit(): void 
  {
    this.items = [
      {
        label : 'Login',
        icon : 'pi pi-fw pi-sign-in',
        visible : true,
        routerLink : '/login',
        routerLinkActiveOptions : { exact : true}
      },
      {
        label : 'Logout',
        icon : 'pi pi-fw pi-sign-out',
        visible : true,
        routerLink : '/login',
        routerLinkActiveOptions : { exact : true}
      }
    ]
  }

  // logOut() : void
  // {
  //   console.log('Its workinf');
  //   this.route.navigate(['login']);
  //   // return this.authService.signOut();
  // }

}
