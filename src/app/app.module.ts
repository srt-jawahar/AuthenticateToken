import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './layouts/auth/login.module';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth.service';
import { MenubarModule } from 'primeng/menubar';
import { AuthGuard } from './shared/guard/auth.guard';
import { MessageService } from 'primeng/api';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    ButtonModule,
    MenubarModule,
    RippleModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    AuthService,
    AuthGuard,
    MessageService
  ],
  bootstrap: [AppComponent],
  exports : [SidebarComponent]
})
export class AppModule { }
