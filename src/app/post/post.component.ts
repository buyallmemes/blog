import {Component, Input} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
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
export class PostComponent {
  @Input() post?: Post;
}
