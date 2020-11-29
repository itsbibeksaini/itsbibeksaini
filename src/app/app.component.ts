import { Component, EventEmitter, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCogs, faHome, faLaptopCode, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
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

  themeSwitchState!:boolean
  constructor(private themeSwitcher:ThemeSwitcherService, private renderer:Renderer2){
    var body = document.getElementsByTagName('body')[0];

    themeSwitcher.getThemeState().subscribe(state =>{
      
      if(state == ThemeSwitcherService.THEME_LIGHT)
        this.renderer.removeClass(body,ThemeSwitcherService.THEME_DARK);
      else
        this.renderer.removeClass(body,ThemeSwitcherService.THEME_LIGHT);

      this.renderer.addClass(body,state);
    })

    let currentTheme:string = themeSwitcher.getThemeCurrentValue();
    this.themeSwitchState = currentTheme === ThemeSwitcherService.THEME_DARK; // false for light theme

  }

  switchTheme(evt: MatSlideToggleChange){
    this.themeSwitcher.switchTheme(evt.checked)
  }
}
