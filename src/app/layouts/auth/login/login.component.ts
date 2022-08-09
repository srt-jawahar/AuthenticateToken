import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private route : Router,
    private messageService : MessageService
  ) { }

  ngOnInit(): void {
  }

  value3: string | undefined;

  handleClick(event : any)
  {
    // console.log(this.loginData);
    this.authService.userLogin(this.loginData)
        .subscribe((value) => {
          {
            this.route.navigate(['/overview']);
            console.log(this.loginData);
            this.messageService.add({severity:'success', summary: 'Suceess', detail: 'Login Success'});
          }
          // else
          // {
          //   this.messageService.add({severity:'error', summary: 'Failed', detail: 'Login Failed'});
          //   console.log("Login Failed");
          // }
        }, error => {
          this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});
          console.log("idea loading");
        }
        );
    
  }

  handleClick1()
  {
    console.log("no 234 is coree")
  }

  loginData = {
    usernameOremployeeId : '',
    password : ''
  };

}
