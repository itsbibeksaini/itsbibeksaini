import { Component, Renderer2 } from '@angular/core';
import { ThemeSwitcherService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isDarkTheme!:boolean
  constructor(private themeSwitcher:ThemeSwitcherService, private renderer:Renderer2){
    var body = document.getElementsByTagName('body')[0];

    this.isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.switchTheme(this.isDarkTheme ? ThemeSwitcherService.THEME_DARK : ThemeSwitcherService.THEME_LIGHT, body);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) =>{
      this.switchTheme(evt.matches ? ThemeSwitcherService.THEME_DARK : ThemeSwitcherService.THEME_LIGHT, body);
    });
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
