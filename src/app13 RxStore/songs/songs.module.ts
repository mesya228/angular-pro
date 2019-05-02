import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SongsFavouritesComponent,
  SongsListenedComponent,
  SongsPlaylistComponent,
  SongsListComponent
} from './components';

import { SongsService } from './services/songs.service';

const COMPONENTS = [
  SongsFavouritesComponent,
  SongsListenedComponent,
  SongsPlaylistComponent,
  SongsListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    SongsService
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SongsModule { }
