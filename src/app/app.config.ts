import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {HighlightService} from "./blog/highlight.service";
import {provideClientHydration} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({anchorScrolling: 'enabled'})),
    provideAnimationsAsync(),
    importProvidersFrom(HighlightService),
    provideHttpClient(withFetch()), provideClientHydration()
  ]
};
