import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Post } from './post';
import { SafeHtmlPipe } from './safehtmlpipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// FontAwesome mocks
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add FontAwesome icons to the library for testing
library.add(fas as any);

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockPost: Post;

  beforeEach(async () => {
    // Create a mock post
    mockPost = {
      anchor: 'test-post',
      title: 'Test Post Title',
      content: '<p>Test content</p>',
      date: '2023-05-15',
    };

    await TestBed.configureTestingModule({
      imports: [PostComponent, SafeHtmlPipe, HttpClientTestingModule],
      // Use NO_ERRORS_SCHEMA to ignore unknown elements like mat-card
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

    // Set the input post
    component.post = mockPost;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set postShareTitle on initialization', () => {
    expect(component.postShareTitle).toBe(`BuyAllMemes - Blog - ${mockPost.title}`);
  });

  it('should set default postShareTitle when post has no title', () => {
    component.post = { ...mockPost, title: '' };
    component.ngOnInit();
    expect(component.postShareTitle).toBe('BuyAllMemes - Blog');
  });

  it('should handle undefined post gracefully', () => {
    // @ts-expect-error - Deliberately setting post to undefined for testing
    component.post = undefined;
    component.ngOnInit();
    expect(component.postShareTitle).toBe('BuyAllMemes - Blog');
  });

  // Test with a different post
  it('should update postShareTitle when post changes', () => {
    const newPost: Post = {
      anchor: 'another-post',
      title: 'Another Post Title',
      content: '<p>Another content</p>',
      date: '2023-06-20',
    };

    component.post = newPost;
    component.ngOnInit();

    expect(component.postShareTitle).toBe(`BuyAllMemes - Blog - ${newPost.title}`);
  });
});
