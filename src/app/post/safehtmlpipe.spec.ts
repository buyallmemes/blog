import { SafeHtmlPipe } from './safehtmlpipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockSafeHtml: SafeHtml;

  beforeEach(() => {
    // Create a mock for DomSanitizer
    const sanitizerSpy = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);

    // Configure TestBed with the mock
    TestBed.configureTestingModule({
      providers: [SafeHtmlPipe, { provide: DomSanitizer, useValue: sanitizerSpy }],
    });

    // Get instances
    pipe = TestBed.inject(SafeHtmlPipe);
    sanitizer = TestBed.inject(DomSanitizer) as jasmine.SpyObj<DomSanitizer>;

    // Create a mock SafeHtml value
    mockSafeHtml = {} as SafeHtml;
    sanitizer.bypassSecurityTrustHtml.and.returnValue(mockSafeHtml);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform HTML string to SafeHtml', () => {
    const htmlString = '<div>Test HTML</div>';
    const result = pipe.transform(htmlString);

    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(htmlString);
    expect(result).toBe(mockSafeHtml);
  });

  it('should handle empty string', () => {
    const result = pipe.transform('');

    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith('');
    expect(result).toBe(mockSafeHtml);
  });

  it('should handle complex HTML content', () => {
    const complexHtml = `
      <div class="content">
        <h1>Title</h1>
        <p>Paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
        <pre><code>const example = 'code';</code></pre>
      </div>
    `;

    const result = pipe.transform(complexHtml);

    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(complexHtml);
    expect(result).toBe(mockSafeHtml);
  });
});
