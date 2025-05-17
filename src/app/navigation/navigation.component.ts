/**
 * Navigation component for the application header.
 * Provides navigation controls and external link handling.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIconButton,
    MatToolbar
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  /**
   * Creates an instance of NavigationComponent.
   *
   * @param router - Angular router service for navigation
   */
  constructor(private router: Router) {}

  /**
   * Opens a URL in a new browser tab/window.
   *
   * @param url - The URL to open
   */
  openLinkInNewWindow(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Navigates to the home page and scrolls to the top of the page.
   */
  goHome(): void {
    this.router.navigate(['']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
