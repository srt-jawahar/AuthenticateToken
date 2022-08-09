import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guard/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { OverviewComponent } from "./overview/overview.component";

const routes : Routes = [
    {
        path : 'overview',
        component : OverviewComponent,
        canActivate : [AuthGuard]
    },
    {
        path : 'dashboard',
        component : DashboardComponent,
        canActivate : [AuthGuard]
    }
]

@NgModule(
    {
        imports : [
            RouterModule.forChild(routes)
        ],
        exports : [
            RouterModule
        ]
    })

export class DashboardRouting {}