import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// FontAwesome imports
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerTestIcons } from '../testing/fontawesome-test-helpers';

import { BlogComponent } from './blog.component';
import { HighlightService } from './highlight.service';
import { Blog } from './blog';
import { Post } from '../post/post';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockScroller: jasmine.SpyObj<ViewportScroller>;
  let mockHighlightService: jasmine.SpyObj<HighlightService>;
  let mockTitleService: jasmine.SpyObj<Title>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockBlog: Blog;
  let mockPosts: Post[];
  let iconLibrary: FaIconLibrary;

  beforeEach(async () => {
    // Create mock posts
    mockPosts = [
      {
        anchor: 'first-post',
        title: 'First Post',
        content: '<p>First post content</p>',
        date: '2023-05-15',
      },
      {
        anchor: 'second-post',
        title: 'Second Post',
        content: '<p>Second post content</p>',
        date: '2023-06-20',
      },
    ];

    // Create mock blog
    mockBlog = {
      posts: mockPosts,
    };

    // Create spies for services
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockScroller = jasmine.createSpyObj('ViewportScroller', ['scrollToPosition']);
    mockHighlightService = jasmine.createSpyObj('HighlightService', ['highlightAll']);
    mockTitleService = jasmine.createSpyObj('Title', ['setTitle']);

    // Create mock ActivatedRoute with fragment and data observables
    mockActivatedRoute = {
      fragment: of('first-post'),
      data: of({ blog: mockBlog }),
      paramMap: of({
        get: () => null,
        has: () => false,
        getAll: () => [],
        keys: [] as string[],
      }),
    };

    await TestBed.configureTestingModule({
      imports: [BlogComponent, HttpClientTestingModule, FontAwesomeModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ViewportScroller, useValue: mockScroller },
        { provide: HighlightService, useValue: mockHighlightService },
        { provide: Title, useValue: mockTitleService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements
    }).compileComponents();

    // Get the icon library and register icons
    iconLibrary = TestBed.inject(FaIconLibrary);
    registerTestIcons(iconLibrary);

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load posts from route data', () => {
    expect(component.blog).toEqual(mockBlog);
  });

  it('should select post based on fragment', () => {
    expect(component.selectedPost).toEqual(mockPosts[0]);
    expect(component.fragment).toBe('first-post');
  });

  it('should update page title based on selected post', () => {
    expect(mockTitleService.setTitle).toHaveBeenCalledWith('BuyAllMemes Blog - First Post');
  });

  it('should call highlight service after view checked', () => {
    component.ngAfterViewChecked();
    expect(mockHighlightService.highlightAll).toHaveBeenCalled();
  });

  it('should select first post when no fragment is provided', () => {
    // Update the fragment observable to emit null
    mockActivatedRoute.fragment = of(null);

    // Re-initialize the component to trigger the subscription
    component.ngOnInit();

    expect(component.selectedPost).toEqual(mockPosts[0]);
  });

  it('should select post when selectPost is called', () => {
    component.selectPost(mockPosts[1]);

    expect(component.selectedPost).toEqual(mockPosts[1]);
    expect(component.fragment).toBe('second-post');
    // The component uses path-based navigation, not fragment-based
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/post', 'second-post'], {
      replaceUrl: false,
    });
  });

  it('should correctly identify selected post', () => {
    component.selectedPost = mockPosts[0];

    expect(component.isSelectedPost(mockPosts[0])).toBeTrue();
    expect(component.isSelectedPost(mockPosts[1])).toBeFalse();
  });

  it('should handle non-existent fragment by selecting first post', () => {
    mockActivatedRoute.fragment = of('non-existent-post');

    component.ngOnInit();

    expect(component.selectedPost).toEqual(mockPosts[0]);
  });

  it('should handle empty posts array gracefully', () => {
    // Create an empty blog
    const emptyBlog = { posts: [] };

    // Update the route data with the empty blog
    mockActivatedRoute.data = of({ blog: emptyBlog });

    // Re-initialize the component to reload posts with the empty blog data
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.selectedPost).toBeUndefined();
  });

  it('should clean up subscriptions on destroy', () => {
    // Create spy to track unsubscribe calls
    const subscriptionSpy = jasmine.createSpyObj('Subscription', ['unsubscribe']);

    // @ts-expect-error - Accessing private property for testing
    component.subscriptions = [subscriptionSpy, subscriptionSpy];

    component.ngOnDestroy();

    expect(subscriptionSpy.unsubscribe).toHaveBeenCalledTimes(2);
  });
});
