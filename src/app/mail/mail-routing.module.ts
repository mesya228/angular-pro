import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderResolver } from './containers/mail-folder/mail-folder.resolver';
import { MailViewResolver } from './components/mail-view/mail-view.resolver';

const routes: Routes = [
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
    resolve: {
      setup: MailViewResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
