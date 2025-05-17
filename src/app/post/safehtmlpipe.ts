/**
 * Pipe for safely rendering HTML content in templates.
 *
 * SECURITY WARNING: This pipe bypasses Angular's built-in sanitization.
 * Only use this pipe with content from trusted sources to prevent XSS vulnerabilities.
 * Never use with user-generated content or content from untrusted APIs.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Transforms a string containing HTML into a value that's safe to use in DOM contexts.
 *
 * Usage in templates:
 * <div [innerHTML]="htmlContent | SafeHtml"></div>
 *
 * Note: The pipe name uses PascalCase to maintain backward compatibility with existing templates.
 * Angular convention typically recommends camelCase for pipe names.
 */
@Pipe({
  standalone: true,
  name: 'SafeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  /**
   * Creates an instance of SafeHtmlPipe.
   *
   * @param sanitizer - Angular's DomSanitizer service
   */
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Transforms a string with HTML content into a safe value for rendering.
   *
   * @param value - The HTML string to be sanitized
   * @returns A value marked as trusted HTML by Angular's sanitizer
   */
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
