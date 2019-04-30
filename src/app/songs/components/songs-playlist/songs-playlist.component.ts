import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { SongsService } from '../../services/songs.service';

import { Store } from 'src/app/store';


@Component({
  selector: 'app-songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.sass']
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {

  playlist$: Observable<any>;
  playlistSubscription: Subscription;

  constructor(
    private songsService: SongsService,
    private store: Store
  ) { }

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.playlistSubscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.playlistSubscription.unsubscribe();
  }

}
