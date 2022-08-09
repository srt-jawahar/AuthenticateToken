import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwthelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private messageService : MessageService,
    private route : Router
  ) {
    this.loadingUserInfo();
  }

  loadingUserInfo() {
    const userdata = this.userInfo.getValue();
    if (!userdata) {
      const accessToken = localStorage.getItem('accessToken1');
      if (accessToken) {
        const decryptedUser = this.jwthelper.decodeToken(accessToken);
        console.log(decryptedUser);

        const data = {
          accessToken1: accessToken,
          username: decryptedUser.username,
          userId: decryptedUser.sub,
          role: decryptedUser.role,
          tokenExpiration: decryptedUser.exp
        };
      }
    }
  }

  userLogin(userpayload: any) : Observable<boolean> {

     return this.http.post<any>(`http://techstephub.focusrtech.com:5050/techstep/api/auth/signin`, userpayload).pipe(
      map((value : any) => {
        if (value) {
          localStorage.setItem("accessToken1", value.accessToken);
          const decryptedUser = this.jwthelper.decodeToken(value.accessToken);
          console.log(decryptedUser);

          const data = {
            accessToken1: value.accessToken,
            username: decryptedUser.username,
            userId: decryptedUser.sub,
            role: decryptedUser.role,
            tokenExpiration: decryptedUser.exp
          };

          this.userInfo.next(data);
          return true;
        }
        return false;
      })
    )

  }

  public isAuthenticated() : boolean
  {
    const token = localStorage.getItem('accessToken1') || '{}';
    if(this.jwthelper.isTokenExpired(token))
    {
      this.messageService.add({severity:'warn', summary: 'Expired', detail: 'Seession Expired`'});

      this.signOut();
    }
    return !this.jwthelper.isTokenExpired(token);
  }

  public signOut() : void
  {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');

    this.route.navigate(['/login']);

  }

}
