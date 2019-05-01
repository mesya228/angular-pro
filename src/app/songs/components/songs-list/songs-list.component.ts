import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.sass']
})
export class SongsListComponent implements OnInit {

  @Input() list;

  @Output() toggle = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  toggleItem(track, type: string) {
    this.toggle.emit({
      ...track,
      [type]: !track[type]
    });
  }

  getTrackById(index, item) {
    return item.id;
  }

}
