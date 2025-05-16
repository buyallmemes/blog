import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {HighlightService} from "./blog/highlight.service";
import {provideClientHydration} from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {addIcons} from './icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({anchorScrolling: 'enabled'})),
    provideAnimationsAsync(),
    importProvidersFrom(
      HighlightService,
      FontAwesomeModule
    ),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    {
      provide: FaIconLibrary,
      useFactory: () => {
        const library = new FaIconLibrary();
        addIcons(library);
        return library;
      }
    }
  ]
};
