/**
 * Service for syntax highlighting code blocks in the application.
 * Uses PrismJS to provide syntax highlighting for various programming languages.
 * Handles platform detection to ensure compatibility with server-side rendering.
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Import PrismJS core
import 'prismjs';

// Import PrismJS plugins
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

// Import language support for syntax highlighting
// Web languages
import 'prismjs/components/prism-markup'; // HTML, XML, etc.
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

// Other languages
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';

/**
 * Interface for the Prism library to improve type safety
 */
interface PrismStatic {
  highlightAll(): void;
}

/**
 * Global Prism instance from the imported library
 */
declare const Prism: PrismStatic;

/**
 * Service that provides syntax highlighting functionality for code blocks.
 *
 * Supported languages:
 * - HTML/XML (markup)
 * - CSS
 * - JavaScript
 * - TypeScript
 * - Sass/SCSS
 * - Java
 * - Bash/Shell
 *
 * To add support for additional languages, import the corresponding PrismJS component
 * and update the documentation above.
 */
@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  /**
   * Creates an instance of HighlightService.
   *
   * @param platformId - Injection token to determine the current platform (browser/server)
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Applies syntax highlighting to all code blocks on the page.
   * Only runs in browser environments to avoid server-side rendering issues.
   *
   * Usage: Call this method after view initialization or when content changes.
   */
  highlightAll(): void {
    // Only run highlighting in browser environment to avoid SSR issues
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
