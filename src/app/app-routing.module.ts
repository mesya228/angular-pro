import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'folder/inbox'
  },
  {
    path: 'folder',
    loadChildren: './mail/mail.module#MailModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'folder/inbox'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
