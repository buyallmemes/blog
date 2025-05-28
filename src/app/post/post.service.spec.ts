import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogService } from '../blog/blog.service';

describe('BlogService in Post context', () => {
  let blogService: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    blogService = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(blogService).toBeTruthy();
  });
});
