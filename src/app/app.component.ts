/**
 * Root component of the application.
 * Serves as the main container for all other components.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   * Application title used for branding and SEO
   */
  title: string = 'BuyAllMemes';
}
