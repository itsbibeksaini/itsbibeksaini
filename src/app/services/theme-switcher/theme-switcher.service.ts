import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public static THEME_DARK:string = "dark-theme";
  public static THEME_LIGHT:string ="light-theme";

  private static THEME_STORAGE_LABLE:string = "app-theme";

  private _themeState!: BehaviorSubject<string>;  

  constructor(private rendererFactory: RendererFactory2) {     
    let theme:string | null = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT;
    this._themeState = new BehaviorSubject<string>(theme);
  }

   setTheme(){
    // default is light
    let theme:string | null = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
    let renderer: Renderer2 = this.rendererFactory.createRenderer(null, null)
    var body = document.getElementsByTagName('body')[0];
    
    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT;

    this._themeState = new BehaviorSubject<string>(theme);

    renderer.addClass(body,theme);
    localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme);
    this._themeState.next(theme);
      
  }

  switchTheme(value: boolean){
    var body = document.getElementsByTagName('body')[0];
    let theme: string | null = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
    let renderer: Renderer2 = this.rendererFactory.createRenderer(null, null)

    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT;

    if(theme == ThemeSwitcherService.THEME_LIGHT && value){
      theme = ThemeSwitcherService.THEME_DARK;
      renderer.removeClass(body,ThemeSwitcherService.THEME_LIGHT);
    }      
    else if(!value){
      theme = ThemeSwitcherService.THEME_LIGHT;      
      renderer.removeClass(body,ThemeSwitcherService.THEME_DARK);
    }
      

      renderer.addClass(body,theme);
      localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme);
      this._themeState.next(theme);
  }

  getCurrentTheme():string | null{
    return localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE)
  }
}
