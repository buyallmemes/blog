import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { HighlightService } from './highlight.service';

describe('HighlightService', () => {
  let service: HighlightService;

  describe('Browser environment', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      });
      service = TestBed.inject(HighlightService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should call Prism.highlightAll() in browser environment', () => {
      // Create a spy on the global Prism object
      const prismSpy = jasmine.createSpyObj('Prism', ['highlightAll']);
      (window as any).Prism = prismSpy;

      service.highlightAll();

      expect(prismSpy.highlightAll).toHaveBeenCalled();
    });
  });

  describe('Server environment', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      });
      service = TestBed.inject(HighlightService);
    });

    it('should not call Prism.highlightAll() in server environment', () => {
      // Create a spy on the global Prism object
      const prismSpy = jasmine.createSpyObj('Prism', ['highlightAll']);
      (window as any).Prism = prismSpy;

      service.highlightAll();

      expect(prismSpy.highlightAll).not.toHaveBeenCalled();
    });
  });
});
