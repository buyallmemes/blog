import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Post} from "./post";
import {NgIf} from "@angular/common";
import {SafeHtmlPipe} from "./safehtmlpipe";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";

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
export class PostComponent {
  @Input() post?: Post;

}
