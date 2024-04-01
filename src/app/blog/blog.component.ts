import {AfterViewChecked, Component, OnInit} from '@angular/core';
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
import {NgForOf, NgIf, NgOptimizedImage, ViewportScroller} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";
import {PostComponent} from "../post/post.component";
import {Post} from "../post/post";
import {PostService} from "../post/post.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ActivatedRoute} from "@angular/router";

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
    NgForOf,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, AfterViewChecked {
  posts: Post[] = [];
  isLoading = true;
  fragment: string | null = "";

  constructor(private postService: PostService,
              private scroller: ViewportScroller,
              private route: ActivatedRoute
  ) {
  }

  ngAfterViewChecked(): void {
    this.isLoading = false;
    if (this.fragment) {
      this.scroller.scrollToAnchor(this.fragment);
    }
  }


  ngOnInit(): void {
    this.loadPosts();
    this.extractFragment();
  }

  private loadPosts() {
    this.postService.getPosts()
        .subscribe(posts => {
          this.posts = posts
        });
  }

  private extractFragment() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
}
