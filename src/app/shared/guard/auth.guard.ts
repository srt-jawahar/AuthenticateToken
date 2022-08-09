import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    private jwtHelper : JwtHelperService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      Observable<boolean | UrlTree> 
      | Promise<boolean | UrlTree> 
      | boolean | UrlTree 
    {
      const userData = this.authService.userInfo.getValue();
      if(userData && userData.userId)
      {
        if(state.url.indexOf("login") > -1)
        {
          this.router.navigate(['/overview']);
          return false;
        }
      }
      else
      {
        if(state.url.indexOf("overview") > -1)
        {
          this.router.navigate(['/login']);
        }
      }
      return true;

     // return this.checkUserLogin(next, '');
    }

    // checkUserLogin(route : ActivatedRouteSnapshot, url :any) : boolean
    // {
    //   if(this.authService.isAuthenticated())
    //   {
    //     return true;
    //   }
    //   this.router.navigate(['login']);
    //   return false;
    // }
  
}
