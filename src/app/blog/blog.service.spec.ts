import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { environment } from '../../environments/environment';
import { Blog } from './blog';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });

    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch blog data from API', () => {
    const mockBlog: Blog = {
      posts: [
        {
          anchor: 'test-post',
          title: 'Test Post',
          content: '<p>Test content</p>',
          date: '2023-01-01',
        },
      ],
    };

    let result: Blog | undefined;

    // Subscribe to the observable before making the request
    service.fetchBlog().subscribe(blog => {
      result = blog;
    });

    // Expect one request to the API URL
    const req = httpMock.expectOne(environment.blogApiUrl);
    expect(req.request.method).toBe('GET');

    // Provide mock response
    req.flush(mockBlog);

    // Verify the result after the request completes
    expect(result).toEqual(mockBlog);
  });

  // Use fakeAsync to control async behavior
  it('should handle errors and return an empty blog', fakeAsync(() => {
    let result: Blog | undefined;

    // Subscribe to the observable
    service.fetchBlog().subscribe(blog => {
      result = blog;
    });

    // First request (original)
    const req = httpMock.expectOne(environment.blogApiUrl);
    req.error(new ErrorEvent('Network error'));

    // The service uses retry(3), so we need to handle the retry attempts
    for (let i = 0; i < 3; i++) {
      const retryReq = httpMock.expectOne(environment.blogApiUrl);
      retryReq.error(new ErrorEvent(`Retry ${i + 1} failed`));
    }

    // Advance the virtual clock to process all pending asynchronous activities
    tick();

    // Now the observable should have emitted the fallback value
    expect(result).toEqual({ posts: [] });
  }));
});
