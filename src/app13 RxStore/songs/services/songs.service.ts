import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from 'src/app/store';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  getPlaylist$ = this.http
    .get('http://localhost:8080/songs')
    .pipe(
      tap(songs => this.store.set('playlist', songs))
    )

  constructor(
    private http: HttpClient,
    private store: Store,
  ) { }

  toggleSongInfo(toggledSong) {
    this.http.put('http://localhost:8080/song/'+toggledSong.id, toggledSong).subscribe(() => {
      const playlist = this.store.value.playlist.map(song => {
        if (toggledSong.id == song.id)
          return {...song, ...toggledSong}
        else
          return song
      });
      this.store.set('playlist', playlist);
    });
  }
}
