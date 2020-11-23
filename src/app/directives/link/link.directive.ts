import { Directive, HostListener } from '@angular/core';
import * as URLS from 'src/app/constants/urllinks';
@Directive({
  selector: '[link]'
})
export class LinkDirective {
  
  constructor() { }

  @HostListener("click") click(){
    window.open(URLS.GITHUB)
  }

}
