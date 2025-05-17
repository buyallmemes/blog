/**
 * Application configuration for Angular dependency injection.
 * This file centralizes all application-wide provider configurations.
 */
import { ApplicationConfig, importProvidersFrom, Provider } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Application imports
import { routes } from './app.routes';
import { HighlightService } from './blog/highlight.service';
import { addIcons } from './icons';

/**
 * Creates a provider for FontAwesome icon library.
 * Configures the icon library with application-specific icons.
 *
 * @returns Provider for the FontAwesome icon library
 */
function provideFontAwesomeIcons(): Provider {
  return {
    provide: FaIconLibrary,
    useFactory: () => {
      const library = new FaIconLibrary();
      addIcons(library);
      return library;
    }
  };
}

/**
 * Main application configuration.
 * Provides all necessary services and configurations for the application.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Routing configuration
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled' })
    ),

    // HTTP client configuration
    provideHttpClient(withFetch()),

    // Server-side rendering and hydration
    provideClientHydration(),

    // Animation support
    provideAnimationsAsync(),

    // Application services
    importProvidersFrom(
      HighlightService,
      FontAwesomeModule
    ),

    // Icon library configuration
    provideFontAwesomeIcons()
  ]
};
