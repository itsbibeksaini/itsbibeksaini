import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public static THEME_DARK:string = "dark-theme";
  public static THEME_LIGHT:string ="light-theme";

  private static THEME_STORAGE_LABLE:string = "app-theme";

  private _themeState!: BehaviorSubject<string>;
  public readonly themeState!: Observable<string>;

  constructor() { 
    this.setTheme();
    this.themeState = this._themeState.asObservable();
  }

  private setTheme(){
    // default is light
    let theme:string | null = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);
    
    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT;

    this._themeState = new BehaviorSubject<string>(theme);

    localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme);
    this._themeState.next(theme);
      
  }

  switchTheme(value: boolean){
    let theme: string | null = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE);

    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT;

    if(theme == ThemeSwitcherService.THEME_LIGHT && value)
      theme = ThemeSwitcherService.THEME_DARK;
    else if(!value)
      theme = ThemeSwitcherService.THEME_LIGHT;      

      localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme);
      this._themeState.next(theme);
  }
}
