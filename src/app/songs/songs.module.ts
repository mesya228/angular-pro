import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SongsFavouritesComponent,
  SongsListenedComponent,
  SongsPlaylistComponent
} from './components';

import { SongsService } from './services/songs.service';

const COMPONENTS = [
  SongsFavouritesComponent,
  SongsListenedComponent,
  SongsPlaylistComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    SongsService
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SongsModule { }
