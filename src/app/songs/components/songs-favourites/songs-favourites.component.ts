import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from 'src/app/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-songs-favourites',
  templateUrl: './songs-favourites.component.html',
  styleUrls: ['./songs-favourites.component.sass']
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
    .pipe(
      filter(Boolean),
      map(playlist => playlist.filter(song => song.favourites))
    );;
  }

}
