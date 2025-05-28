import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Provider, Type } from '@angular/core';
import { of } from 'rxjs';

/**
 * Find all elements with the given selector from the fixture
 */
export function findElements<T>(fixture: ComponentFixture<T>, selector: string): HTMLElement[] {
  const debugElements = fixture.debugElement.queryAll(By.css(selector));
  return debugElements.map(el => el.nativeElement);
}

/**
 * Find a single element with the given selector from the fixture
 */
export function findElement<T>(fixture: ComponentFixture<T>, selector: string): HTMLElement {
  const debugElement = fixture.debugElement.query(By.css(selector));
  return debugElement ? debugElement.nativeElement : null;
}

/**
 * Trigger click event on an element
 */
export function click<T>(fixture: ComponentFixture<T>, selector: string): void {
  const element = findElement(fixture, selector);
  element.click();
  fixture.detectChanges();
}

/**
 * Set value of an input element
 */
export function setInputValue<T>(
  fixture: ComponentFixture<T>,
  selector: string,
  value: string
): void {
  const inputElement = findElement(fixture, selector) as HTMLInputElement;
  inputElement.value = value;
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();
}

/**
 * Create mock objects easily
 */
export function createMock<T>(overrides: Partial<T> = {}): T {
  return overrides as T;
}

/**
 * Wait for async operations to complete
 */
export async function waitForAsync(fixture: ComponentFixture<any>): Promise<void> {
  fixture.detectChanges();
  await fixture.whenStable();
  fixture.detectChanges();
}

/**
 * Create a mock provider for testing
 */
export function MockProvider<T>(service: Type<T>, mockObject: Partial<T> = {}): Provider {
  return {
    provide: service,
    useValue: createMock<T>(mockObject),
  };
}

/**
 * Create an auto-mocked HTTP service with common methods pre-mocked
 * Useful for quickly mocking services that make HTTP requests
 */
export function createHttpServiceMock<T>(type: Type<T>, customMethods: Partial<T> = {}): T {
  const baseMock = {
    get: jasmine.createSpy('get').and.returnValue(of({})),
    post: jasmine.createSpy('post').and.returnValue(of({})),
    put: jasmine.createSpy('put').and.returnValue(of({})),
    delete: jasmine.createSpy('delete').and.returnValue(of({})),
    ...customMethods,
  };

  return createMock<T>(baseMock as Partial<T>);
}
