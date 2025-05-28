import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

export interface MetaTagConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  keywords?: string;
  publishedAt?: Date;
  modifiedAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly siteName = 'BuyAllMemes';
  private readonly siteUrl = 'https://buyallmemes.com';
  private readonly defaultImage = 'assets/logo.png';
  private readonly defaultDescription =
    'Technical blog about software engineering and development patterns';
  private readonly twitterHandle = '@buyallmemes'; // Replace with your actual Twitter handle

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Configure all meta tags using provided data or defaults
   */
  updateMetaTags(config: MetaTagConfig): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Basic tags
    this.title.setTitle(`${config.title} | ${this.siteName}`);

    // Essential meta tags
    this.meta.updateTag({
      name: 'description',
      content: config.description || this.defaultDescription,
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // URL and canonical
    const url = config.url || `${this.siteUrl}${this.router.url}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonicalLink(url);

    // Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description || this.defaultDescription,
    });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({
      property: 'og:image',
      content: this.getAbsoluteUrl(config.image || this.defaultImage),
    });

    // Twitter Card meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: this.twitterHandle });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description || this.defaultDescription,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.getAbsoluteUrl(config.image || this.defaultImage),
    });

    // Article specific meta tags
    if (config.publishedAt) {
      this.meta.updateTag({
        property: 'article:published_time',
        content: config.publishedAt.toISOString(),
      });
    }

    if (config.modifiedAt) {
      this.meta.updateTag({
        property: 'article:modified_time',
        content: config.modifiedAt.toISOString(),
      });
    }

    if (config.author) {
      this.meta.updateTag({ property: 'article:author', content: config.author });
    }
  }

  /**
   * Set canonical URL
   */
  private setCanonicalLink(url: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Remove any existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  /**
   * Convert relative URLs to absolute URLs
   */
  private getAbsoluteUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    // Remove leading slash if it exists
    const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
    return `${this.siteUrl}/${cleanUrl}`;
  }
}
