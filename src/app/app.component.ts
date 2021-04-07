import { Component, Renderer2 } from '@angular/core';
import { ThemeSwitcherService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  constructor(private themeSwitcher:ThemeSwitcherService, private renderer:Renderer2){

    let loadSystemDefaultTheme:boolean = themeSwitcher.getCurrentTheme() == null

    if(loadSystemDefaultTheme){
      var body = document.getElementsByTagName('body')[0];

      let isDarkTheme:boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeSwitcher.switchTheme(isDarkTheme);

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) =>{          
        themeSwitcher.switchTheme(evt.matches);
      });
    }
    else
      this.themeSwitcher.setTheme()
    
    
  }
}
