import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatSlider} from "@angular/material/slider";
import {MatTooltip} from "@angular/material/tooltip";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";
import {PostComponent} from "../post/post.component";
import {Post} from "../post/post";
import {PostService} from "../post/post.service";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCard,
    MatLabel,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatFormField,
    MatDatepickerInput,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatSlider,
    MatTooltip,
    MatFabButton,
    MatPaginator,
    NgOptimizedImage,
    MarkdownComponent,
    PostComponent,
    NgForOf
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
