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
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, ViewportScroller} from "@angular/common";
import {PostComponent} from "../post/post.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ActivatedRoute} from "@angular/router";
import {HighlightService} from "./highlight.service";
import {Blog} from "./blog";

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
    PostComponent,
    NgForOf,
    MatProgressSpinner,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, AfterViewChecked {
  blog?: Blog;
  fragment: string | null = "";

  constructor(private scroller: ViewportScroller,
              private route: ActivatedRoute,
              private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (this.fragment) {
      this.scroller.scrollToAnchor(this.fragment);
    }
    this.highlightService.highlightAll();
  }


  ngOnInit(): void {
    this.loadPosts();
    this.extractFragment();
  }

  private loadPosts() {
    this.route.data.subscribe(({blog}) => {
      this.blog = blog;
    });
  }

  private extractFragment() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
}
