import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void 
  {
    this.authService.userInfo.subscribe(value => {
      if(value)
      {
        this.user.username = value.username;
      this.user.id = value.userId;
      }
    })
  }

  user = {
    username : '',
    id : ''
  };

}
