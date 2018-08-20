import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor( translateService: TranslateService ) {
    // fallbacklanguage
    translateService.setDefaultLang('en');

    // lang if no other found
    translateService.use('en');

    translateService.get('title')
            .subscribe((res: string) => {
                console.log(res);
            });
  }

}
