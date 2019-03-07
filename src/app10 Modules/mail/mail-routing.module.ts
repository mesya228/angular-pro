import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

import { MailViewResolver } from './components/mail-view/mail-view.resolver';
import { MailFolderResolver } from './containers/mail-folder/mail-folder.resolver';

import { AuthGuard } from '../auth/auth.guard';
import { MailViewGuard } from './components/mail-view/mail-view-guard/mail-view.guard';

const routes: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          setup: MailFolderResolver
        },
      },
      {
        path: 'message/:id', 
        component: MailViewComponent,
        outlet: 'pane',
        canDeactivate: [MailViewGuard],
        resolve: {
          setup: MailViewResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
