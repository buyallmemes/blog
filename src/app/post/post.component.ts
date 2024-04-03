import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {Post} from "./post";
import {NgIf} from "@angular/common";
import {SafeHtmlPipe} from "./safehtmlpipe";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgIf,
    SafeHtmlPipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post?: Post;

}
