import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(public translateService: TranslateService ) {
    // fallbacklanguage
    translateService.setDefaultLang('en');
    translateService.addLangs(['en', 'de', 'es', 'pt']);

    // lang if no other found
    translateService.use('en');

    translateService.get('title')
            .subscribe((res: string) => {
                console.log(res);
            });

      let browserLang = translateService.getBrowserLang();
      translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }
    
    switchLang(language: string) {
      this.translateService.use(language);
    }
  }
  

/*         "": "",
            "": "",
            "": "",
            "": "",
            "": "" */
