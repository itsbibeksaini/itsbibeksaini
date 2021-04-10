import { Directive, HostListener, Input } from '@angular/core';
import * as URLS from 'src/app/constants/urllinks';

@Directive({
  selector: '[link]'
})
export class LinkDirective {

  @Input() link!: string
  constructor() { }

  @HostListener("click") click(){    
    if(this.link === 'github')
      window.open(URLS.GITHUB)
    else if(this.link === 'linkdin')
      window.open(URLS.LINKEDIN)
    else if(this.link === 'facebook')
      window.open(URLS.FACEBOOK)
    else if(this.link === 'instagram')
      window.open(URLS.INSTAGRM)
      else if(this.link === 'resume')
      window.open(URLS.RESUME)
  }

}
