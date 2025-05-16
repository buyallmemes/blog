import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Post} from "./post";
import {NgIf} from "@angular/common";
import {SafeHtmlPipe} from "./safehtmlpipe";
import {ShareButtons} from "ngx-sharebuttons/buttons";

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
    ShareButtons
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  postShareTitle: string = '';

  constructor() {
  }


  ngOnInit(): void {
    this.postShareTitle = 'BuyAllMemes - Blog - ' + this.post.title;
  }
}
