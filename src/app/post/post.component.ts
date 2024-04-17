import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Post} from "./post";
import {NgIf} from "@angular/common";
import {SafeHtmlPipe} from "./safehtmlpipe";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareService} from "ngx-sharebuttons";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgIf,
    SafeHtmlPipe,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    ShareButtonsModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  postShareTitle: string = '';

  constructor(private share: ShareService) {
  }


  ngOnInit(): void {
    this.postShareTitle = 'BuyAllMemes - Blog - ' + this.post.title;

    this.share.addButton('linkedin', LINKEDIN_BUTTON);
  }
}

const LINKEDIN_BUTTON = {
  type: 'linkedin',
  text: 'LinkedIn',
  ariaLabel: 'Share on LinkedIn',
  icon: ['fab', 'linkedin-in'],
  color: '#006fa6',
  params: {
    url: 'url',
    title: 'title',
    description: 'text'
  },
  share: {
    desktop: 'https://www.linkedin.com/shareArticle?'
  }
};

