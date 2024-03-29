import {Component} from '@angular/core';
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
import {NgOptimizedImage} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";

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
    MarkdownComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  content: string = `# Hello, world!
I hate frontend. But at least, I figured out how to use markdown to render content, so I don't have to struggle with WYSIWYG editors, at least now.

But where was I... Oh yes, **_BLOG_**! I'm building a blog - something you've never heard of or seen before, right? I hope you can read through my sarcasm, I'm using it a lot, and I'm not going to tell you where - figure it out by yourself.

The idea is simple - share **my** knowledge and opinions on software stuff. And there's no better way to do it, but via examples. So, let's do it!

I'm going to build a blog, while covering certain aspects of the building process in this blog. So you could see the pattern in action. I'm going to start simple, heck, I'm a backend developer, who claims to be proficient in Java and distributed systems, but I'm writing this in .MD file, which I will copy-paste into a \`component\` file.

I want to make this process agile and iterative while doing only what is totally necessary to build what I want now.
So, for now, it's a single-repo-almost-a-static-page-thingy - https://github.com/buyallmemes/blog.


Also, I kinda enjoy writing from time to time + I'm a programmer, so why not combine the best of both worlds - create a place where a can park some of my thoughts for good.
`;
}
