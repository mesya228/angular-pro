import { Component} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import * as M from 'node_modules/materialize-css'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  activeLanguage: string;

  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('language') || 'en');
    this.translateService.onLangChange.subscribe(res => {
      localStorage.setItem('language', res.lang);
      this.activeLanguage = res.lang == 'en' ? 'English' : res.lang == 'ru' ? 'Русский' : res.lang == 'uk' ? 'Украинский' : '';
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });
    
  }

  changeLang(language: string) {
    this.translateService.use(language);
  }
  
}
