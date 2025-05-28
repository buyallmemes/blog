/**
 * Component for displaying an individual blog post.
 * Renders post content with title, date, and sharing options.
 */
import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { ShareButtons } from 'ngx-sharebuttons/buttons';

import { Post } from './post';
import { SafeHtmlPipe } from './safehtmlpipe';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgIf,
    SafeHtmlPipe,
    ShareButtons,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  /**
   * The post data to be displayed
   */
  @Input() post!: Post;

  /**
   * Title used for social media sharing
   * @private Used internally, exposed via getter
   */
  private _postShareTitle: string = '';

  /**
   * The canonical URL for this post
   */
  postUrl: string = '';

  /**
   * Creates an instance of PostComponent.
   */
  constructor() {}

  /**
   * Lifecycle hook that is called when the component is initialized.
   * Sets up the share title based on the post title.
   */
  ngOnInit(): void {
    if (this.post?.title) {
      this._postShareTitle = `BuyAllMemes - Blog - ${this.post.title}`;
    } else {
      this._postShareTitle = 'BuyAllMemes - Blog';
    }
    if (this.post) {
      this.updatePostUrl();
    }
  }

  /**
   * Updates the URL used for sharing this post
   */
  private updatePostUrl(): void {
    // Use canonical path-based URL for sharing
    const baseUrl = 'https://buyallmemes.com';
    this.postUrl = `${baseUrl}/post/${this.post.anchor}`;
  }

  /**
   * Gets the formatted title for social media sharing
   */
  get postShareTitle(): string {
    return this._postShareTitle;
  }
}
