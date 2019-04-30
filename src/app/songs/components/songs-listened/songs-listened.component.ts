import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from 'src/app/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-songs-listened',
  templateUrl: './songs-listened.component.html',
  styleUrls: ['./songs-listened.component.sass']
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
      .pipe(
        filter(Boolean),
        map(playlist => playlist.filter(song => song.listened))
      );

  }

}
