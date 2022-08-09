import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./dashboard/dashboard.module').then(_ => _.DashboardModule), 
  },
  {
    path : 'login',
    loadChildren : () => import('./layouts/auth/login.module').then(_ => _.LoginModule),
    canActivate : [AuthGuard]
  },
  // {
  //   path : 'overview',
  //   component : OverviewComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
