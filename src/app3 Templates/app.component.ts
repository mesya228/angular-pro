import { Component, ViewChild, ViewContainerRef, AfterContentInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {
  ctx = {
    $implicit: 'BLABLA',
    location: 'UK'
  }

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Sergey Miller',
      location: 'Kyiv, Ukraine'
    });
  }
  
}
