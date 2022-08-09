import { NgModule } from "@angular/core";
import { LoginRouting } from "./login.route.module";
import { LoginComponent } from "./login/login.component";

import {PasswordModule} from 'primeng/password';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { HttpClientModule } from "@angular/common/http";
import {ToastModule} from 'primeng/toast';

@NgModule(
    {
        imports : [
            LoginRouting,
            PasswordModule,
            FormsModule,
            InputTextModule,
            ButtonModule,
            HttpClientModule,
            ToastModule
            
        ],
        declarations : [
            LoginComponent,
        ],
        providers : [MessageService],
        bootstrap : []
    })

export class LoginModule { }