import {Component, Input, OnInit} from '@angular/core';
import {MarkdownComponent, MarkdownService} from "ngx-markdown";
import {MatCard, MatCardContent} from "@angular/material/card";
import {Post} from "./post";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MarkdownComponent,
    MatCard,
    MatCardContent,
    NgIf
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post?: Post;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = this.decodeHtmlEntities(text)
                              .replace(/[^\w\s]/gi, '')
                              .trim()
                              .replace(/\s+/g, '-')
                              .toLowerCase();
      return '<h' + level + '>' + text +
        '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
        '<span class="header-link"></span>' +
        '</a>' +
        '</h' + level + '>';
    };
  }

  decodeHtmlEntities(input: string): string {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent || "";
  }
}
