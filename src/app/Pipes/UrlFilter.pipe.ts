/**
 * Created by Amila on 12/6/2017.
 */
import { Pipe, PipeTransform }        from '@angular/core';
import { DomSanitizer}                from '@angular/platform-browser';

@Pipe({ name: 'urlFilter' })
export class UrlFilter implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
