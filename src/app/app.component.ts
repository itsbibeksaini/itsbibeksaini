import { Component, EventEmitter, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCogs, faFilePdf, faHome, faLaptopCode, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { timeout } from 'rxjs/operators';
import { ThemeSwitcherService } from './services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHome = faHome
  faLaptopHouse = faLaptopHouse
  faAddressCard = faAddressCard
  faLaptopCode = faLaptopCode
  faCogs = faCogs
  faFilePdf = faFilePdf

  isDarkTheme!:boolean
  isLoading:boolean = true;
  constructor(private themeSwitcher:ThemeSwitcherService, private renderer:Renderer2){
    var body = document.getElementsByTagName('body')[0];

    this.isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.switchTheme(this.isDarkTheme ? ThemeSwitcherService.THEME_DARK : ThemeSwitcherService.THEME_LIGHT, body);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) =>{
      this.switchTheme(evt.matches ? ThemeSwitcherService.THEME_DARK : ThemeSwitcherService.THEME_LIGHT, body);
    });

    setTimeout(() =>{
      this.isLoading = false
    }, 2000)
  }

  switchTheme(state:string, body:HTMLBodyElement){
    let isDarkTheme:boolean = state === ThemeSwitcherService.THEME_DARK;

    if(!isDarkTheme)
      this.renderer.removeClass(body,ThemeSwitcherService.THEME_DARK);
    else
      this.renderer.removeClass(body,ThemeSwitcherService.THEME_LIGHT);
  
    this.renderer.addClass(body,state);

    this.themeSwitcher.switchTheme(isDarkTheme);
  }

}
