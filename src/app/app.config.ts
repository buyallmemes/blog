import {ApplicationConfig, importProvidersFrom, SecurityContext} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MarkdownModule} from "ngx-markdown";
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withInMemoryScrolling({anchorScrolling: 'enabled'})),
      provideAnimationsAsync(),
      importProvidersFrom(MarkdownModule.forRoot({sanitize: SecurityContext.NONE})),
      provideHttpClient(withFetch())
    ]
  }
;
