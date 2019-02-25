import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderService } from './containers/mail-folder/mail-folder.service';

const routes: Routes = [
  { 
    path: 'folder/:name', 
    component: MailFolderComponent,
    resolve: {
      setup: MailFolderService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
