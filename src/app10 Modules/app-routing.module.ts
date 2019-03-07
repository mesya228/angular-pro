import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'dashboard',
    data: {preload: true},
    canLoad: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
