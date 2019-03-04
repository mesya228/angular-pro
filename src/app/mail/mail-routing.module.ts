import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderService } from './containers/mail-folder/mail-folder.service';
import { MailViewComponent } from './components/mail-view/mail-view.component';

const routes: Routes = [
  {
    path: ':name', 
    children: [
      {
        path: '',
        component: MailFolderComponent,
        resolve: {
          setup: MailFolderService
        },
      },
          {
            path: 'message/:id', 
            component: MailViewComponent,
            outlet: 'pane'
          }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
