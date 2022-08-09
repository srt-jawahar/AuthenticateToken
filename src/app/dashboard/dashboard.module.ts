import { NgModule } from "@angular/core";
import { DashboardRouting } from "./dashboard.routing";
import { HomeComponent } from "./home/home.component";

// PRIMENG 
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from "primeng/button";
import { OverviewComponent } from './overview/overview.component';
import {CardModule} from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule(
    {
        imports : [
            DashboardRouting,

            // PRIMENG
            MenubarModule,
            ButtonModule,
            CardModule,
        ],
        declarations : [
            HomeComponent,
            OverviewComponent,
            DashboardComponent,
        ],
        providers : [],
        bootstrap : [],
        exports : [HomeComponent]
    })

export class DashboardModule
{}