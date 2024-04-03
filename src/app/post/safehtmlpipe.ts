import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({standalone: true, name: "SafeHtml"})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
